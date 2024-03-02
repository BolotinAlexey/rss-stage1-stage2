import { assertIsDefined, createElement } from '../../supFunctions';
import { Articles, Lang, ResponseNews } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

const LANG_DEFAULT = Lang.ru;

class App {
    private _controller: AppController;
    private _view: AppView;
    constructor() {
        this._controller = new AppController();
        this._view = new AppView();
    }

    public start(): void {
        const sources: HTMLElement | null = document.querySelector('.sources');
        assertIsDefined(sources);

        sources.addEventListener('click', (e: Event) =>
            this._controller.getNews(e, (data: Articles | undefined) => this._view.drawNews(data))
        );

        const header: HTMLElement | null = document.querySelector('header');
        assertIsDefined(header);
        const ul: HTMLElement = createElement('ul', 'lang-list');
        Object.values(Lang).forEach((ln: Lang) => {
            const li: HTMLElement = createElement('li', 'lang-item', ln);
            li.dataset.lang = ln;
            ul.append(li);
            li.addEventListener('click', (): void => {
                const langItems: NodeListOf<HTMLElement> | null = document.querySelectorAll('.lang-item');
                assertIsDefined(langItems);
                langItems.forEach((el: HTMLElement) => {
                    if (el.classList.contains('checked')) el.classList.remove('checked');
                });
                li.classList.add('checked');
                sources.innerHTML = '';
                this._controller.getSources(
                    (data: ResponseNews | undefined, currentLang: Lang | undefined = Lang[ln]) =>
                        this._view.drawSources(data, currentLang)
                );
            });
        });
        header.appendChild(ul);
        const langDefault: HTMLElement | null = document.querySelector(`[data-lang = ${LANG_DEFAULT}]`);
        assertIsDefined(langDefault);
        langDefault.classList.add('checked');
        this._controller.getSources((data: ResponseNews | undefined, currentLang: Lang = LANG_DEFAULT) =>
            this._view.drawSources(data, currentLang)
        );
    }
}

export default App;
