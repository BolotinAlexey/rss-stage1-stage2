import {
    CallbackFunction,
    CallbackFunctionEmpty,
    Endpoint,
    KeyOptions,
    Method,
    Options,
    Status,
    UrlOptions,
} from '../../types/index';

class Loader {
    private _baseLink: string;
    private _options: object;
    constructor(baseLink: string, options: KeyOptions) {
        this._baseLink = baseLink;
        this._options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoint; options: Options },
        callback: CallbackFunctionEmpty = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(Method.get, endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === Status.NotFound || res.status === Status.Unauthorized)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: Endpoint) {
        const urlOptions: UrlOptions = { ...this._options, ...options };
        let url = `${this._baseLink}${endpoint}?`;

        // Object.keys(urlOptions).forEach((key: string) => {
        //     url += `${key}=${urlOptions[key]}&`;
        // });

        Object.entries(urlOptions).forEach(([key, value]): void => {
            url += `${key}=${value ?? ''}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: Method = Method.get, endpoint: Endpoint, callback: CallbackFunction<T>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
