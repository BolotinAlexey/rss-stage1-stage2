export interface ResponseNews {
    status: 'ok' | 'error';
    sources: Source[];
}

export interface Articles {
    status: Pick<ResponseNews, 'status'>;
    totalResults: number;
    articles: NewsArticle[];
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: Lang;
    country: string;
}

// export type Source = Record<'id' | 'name' | 'description' | 'url' | 'category' | 'country', string>;

interface SourceArticle {
    id: string | null;
    name: string;
}

export interface NewsArticle {
    source: SourceArticle;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface NotPartialOptions {
    sources: string;
}
export type Options = Partial<NotPartialOptions>;

type PropsUrl = 'category' | 'language' | 'country' | 'sources';

export type UrlOptions = Partial<Record<PropsUrl, string | undefined>>;

export type KeyOptions = {
    apiKey: string | undefined;
};

export type CallbackFunctionLang<T, L> = (data?: T, lang?: L) => void;

export type CallbackFunction<T> = (data?: T) => void;

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

export enum Lang {
    ar = 'ar',
    de = 'de',
    en = 'en',
    es = 'es',
    fr = 'fr',
    he = 'he',
    it = 'it',
    nl = 'nl',
    no = 'no',
    pt = 'pt',
    ru = 'ru',
    sv = 'sv',
    ud = 'ud',
    zh = 'zh',
}
