import { Articles, NewsArticle, ResponseNews, Source } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private _news: News;
    private _sources: Sources;
    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    drawNews(data: Articles) {
        const values: NewsArticle[] = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    drawSources(data: ResponseNews) {
        const values: Source[] = data?.sources ? data?.sources : [];
        this._sources.draw(values);
    }
}

export default AppView;
