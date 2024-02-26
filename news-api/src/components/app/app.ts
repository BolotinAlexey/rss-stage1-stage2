import { assertIsDefined } from '../../supFunctions';
import { Articles, ResponseNews } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources');
        assertIsDefined(sources);

        sources.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: Articles | undefined) => this.view.drawNews(data))
        );
        this.controller.getSources((data: ResponseNews | undefined) => this.view.drawSources(data));
    }
}

export default App;
