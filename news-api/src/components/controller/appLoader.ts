import Loader from './loader';
// const API_URL = 'https://newsapi.org/v2/';
const API_URL: string = 'https://rss-news-api.onrender.com/';
const API_KEY: string = 'b75565e666924fd89e82febdb9dcb576';
class AppLoader extends Loader {
    constructor() {
        super(API_URL, {
            // apiKey: process.env.API_KEY,
            apiKey: API_KEY,
        });
    }
}

export default AppLoader;
