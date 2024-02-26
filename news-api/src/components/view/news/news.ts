import { assertIsDefined, getElement } from '../../../supFunctions';
import { NewsArticle } from '../../../types/index';
import './news.css';

class News {
    draw(data: NewsArticle[]): void {
        const news: NewsArticle[] =
            data.length >= 10 ? data.filter((_item: NewsArticle, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        assertIsDefined(newsItemTemp);

        news.forEach((item: NewsArticle, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            assertIsDefined(newsClone);
            if (!(newsClone instanceof HTMLElement)) throw new Error('Error');
            if (idx % 2) {
                const node = getElement(newsClone, '.news__item');
                node.classList.add('alt');
            }

            const photo = getElement(newsClone, '.news__meta-photo');
            photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const author = getElement(newsClone, '.news__meta-author');
            author.textContent = item.author || item.source.name;

            const date = getElement(newsClone, '.news__meta-date');
            date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const title = getElement(newsClone, '.news__description-title');
            title.textContent = item.title;

            const source = getElement(newsClone, '.news__description-source');
            source.textContent = item.title;
            source.textContent = item.source.name;

            const textContent = getElement(newsClone, '.news__description-content');
            textContent.textContent = item.description;

            const readMore = getElement(newsClone, '.news__read-more a');
            readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        assertIsDefined(newsContainer);
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
