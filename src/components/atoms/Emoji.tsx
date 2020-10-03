import React from "react";


export interface EmojiProps{
    symbol: string;
}

const Emoji: React.FC<EmojiProps> = ({ symbol }) => {
    return (
        <span role="img" aria-label="emoji">{symbol}</span>
    );
};

export default Emoji;