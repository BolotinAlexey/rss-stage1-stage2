export interface ResponseNews {
    status: 'ok' | 'error'; //If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.
    sources: Source[]; //The results of the request.
}

export interface Articles {
    status: Pick<ResponseNews, 'status'>;
    totalResults: number; //The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.
    articles: NewsArticle[]; // The results of the request.
}

export interface Source {
    id: string; // The identifier of the news source. You can use this with our other endpoints.
    name: string; //The name of the news source
    description: string; //A description of the news source
    url: string; //The URL of the homepage.
    category: string; //The type of news to expect from this news source.
    language: string; //The language that this news source writes in.
    country: string; //The country this news source is based in (and primarily writes about).
}

interface SourceArticle {
    id: string | null; // The identifier for the source this article came from.
    name: string; //The name for the source this article came from.
}

export interface NewsArticle {
    source: SourceArticle; //The identifier id and a display name name for the source this article came from.
    author: string; //The author of the article
    title: string; //The headline or title of the article.
    description: string; //A description or snippet from the article.
    url: string; //The direct URL to the article.
    urlToImage: string; //The URL to a relevant image for the article.
    publishedAt: string; //The date and time that the article was published, in UTC (+000)
    content: string; //The unformatted content of the article, where available. This is truncated to 200 chars.
}

interface NotPartialOptions {
    sources: string;
}
export type Options = Partial<NotPartialOptions>;

export interface UrlOptions {
    category?: string | undefined;
    language?: string | undefined;
    country?: string | undefined;
    sources?: string | undefined;
}

export type KeyOptions = {
    apiKey: string;
};

export type CallbackFunction<T> = (data: T) => void;
export type CallbackFunctionEmpty = () => void;

export enum Endpoint {
    sources = 'sources',
    everything = 'everything',
}
export enum Method {
    get = 'GET',
    post = 'POST',
}
export enum Status {
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    TooManyRequests = 429,
    ServerError = 500,
}
