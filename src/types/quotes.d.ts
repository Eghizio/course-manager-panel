export type Quote = {
    text: string;
    author: string;
};

//API
export type QuoteResponse = ErrorResponse | SuccessResponse;

export type ErrorResponse = {
    error: {
        code: number;
        message: string;
    };
};

export type SuccessResponse = {
    baseurl: string;
    contents: Contents;
    copyright: Copyright;
    success: Success;
};

type Contents = {
    quotes: QuoteObject[]
};

type Copyright = {
    year: number;
    url: string;
};

type Success = {
    total: number;
};

type QuoteObject = {
    author: string;
    background: URL;
    category: Category
    date: string;
    id: string;
    language: string;
    length: string;
    permalink: URL;
    quote: string;
    tags: string[]; //possibly category array
    title: string;
};

type URL = string;
type Category = "inspire" | "management" | "sports" | "life" | "funny" | "love" | "art" | "students";