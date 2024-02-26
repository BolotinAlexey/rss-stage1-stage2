import { assertIsDefined, createElement } from '../../supFunctions';
import { Articles, Lang, ResponseNews } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private _controller: AppController;
    private _view: AppView;
    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    public start(): void {
        const sources = document.querySelector('.sources');
        assertIsDefined(sources);

        sources.addEventListener('click', (e: Event) =>
            this._controller.getNews(e, (data: Articles | undefined) => this._view.drawNews(data))
        );

        const header = document.querySelector('header');
        assertIsDefined(header);
        const ul: HTMLElement = createElement('ul', 'lang-list');
        Object.values(Lang).forEach((ln) => {
            const li: HTMLElement = createElement('li', 'lang-item', ln);
            ul.append(li);
            li.addEventListener('click', (): void => {
                sources.innerHTML = '';
                this._controller.getSources(
                    (data: ResponseNews | undefined, currentLang: Lang | undefined = Lang[ln]) =>
                        this._view.drawSources(data, currentLang)
                );
            });
        });
        header.appendChild(ul);

        this._controller.getSources((data: ResponseNews | undefined, currentLang: Lang | undefined = Lang.ru) =>
            this._view.drawSources(data, currentLang)
        );
    }
}

export default App;
