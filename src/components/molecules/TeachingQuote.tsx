import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Quote, SuccessResponse } from "../../types/quotes";
import getQuote from "../../utils/getQuote";


const defaultQuote: Quote = {
    text: `Tell me and I forget. Teach me and I remember. Involve me and I learn.`,
    author: "Benjamin Franklin",
};

const TeachingQuote: React.FC = (props) => {
    const [quote, setQuote] = useState<Quote>(defaultQuote);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const someQuote = getQuote();
        setQuote(someQuote);
    }, []);

    React.useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        (async () => {
            try{
                const response = await fetch("http://quotes.rest/qod.json?category=students");
                // const response = await fetch("ugabuga");

                if(response.status === 200){
                    const data: SuccessResponse = await response.json();
                    if(data.contents.quotes.length){
                        const quoteOfTheDay = data.contents.quotes[0];
                        const { quote, author } = quoteOfTheDay;
                        
                        if(!signal.aborted) setQuote({ text: quote, author });
                    }
                }
                if(!signal.aborted) setLoading(false);
            } catch(error) {
                // console.warn(error, "10 hits per hour api, what a joke XD");
                if(!signal.aborted) setLoading(false);
            }
        })();

        return () => { abortController.abort(); };
    }, []);
    

    return (
        <StyledQuote>
            {loading
            ?   <ShakingText>Loading ...</ShakingText>
            :   
                <FadeIn>
                    <QuoteText>
                        {quote.text}
                    </QuoteText>
                </FadeIn>
            }
        </StyledQuote>
    );
};

const StyledQuote = styled.span`
    text-align: center;
    max-width: 300px;
`;

const shake = keyframes`
    10%, 90% { transform: translate(-1px, 0 ); }
    20%, 80% { transform: translate(2px, 0); }
    30%, 50%, 70% { transform: translate(-4px, 0); }
    40%, 60% { transform: translate(4px, 0); }
`;

const ShakingText = styled.span`
    animation: ${shake} 1s infinite;
`;

const QuoteText = styled.blockquote`
    max-width: 275px;
`;

const fadeIn = keyframes`
    from { opacity: 0; };
    to: { opacity: 1; };
`;

const FadeIn = styled.div`
    animation: ${fadeIn} 800ms ease-in-out;
`;

export default TeachingQuote;