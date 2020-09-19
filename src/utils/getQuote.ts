import quotes from "./quotes.json";
import { Quote } from "../types/quotes";

const defaultQuote: Quote = {
    text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
};

const getQuote = (): Quote => quotes.length ? quotes[Math.floor(Math.random()*quotes.length)] : defaultQuote;

export default getQuote;