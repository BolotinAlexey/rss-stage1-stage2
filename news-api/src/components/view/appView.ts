import { Articles, Lang, NewsArticle, ResponseNews, Source } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private _news: News;
    private _sources: Sources;
    constructor() {
        this._news = new News();
        this._sources = new Sources();
    }

    drawNews(data: Articles | undefined) {
        const values: NewsArticle[] = data?.articles ? data?.articles : [];
        this._news.draw(values);
    }

    drawSources(data: ResponseNews | undefined, currentLang: Lang) {
        const values: Source[] = data?.sources ? data?.sources : [];
        this._sources.draw(values, currentLang);
    }
}

export default AppView;
