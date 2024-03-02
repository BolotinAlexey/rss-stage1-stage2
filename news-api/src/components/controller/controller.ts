import { assertIsDefined, getElementDocument } from '../../supFunctions';
import { Articles, CallbackFunction, Endpoint, ResponseNews } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallbackFunction<ResponseNews>) {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackFunction<Articles>) {
        let target: EventTarget | null = e.target;
        assertIsDefined(target);
        if (!(target instanceof Element)) throw new Error('Error');

        const newsContainer: EventTarget | null = e.currentTarget;
        assertIsDefined(newsContainer);
        if (!(newsContainer instanceof Element)) throw new Error('Error');

        const body: HTMLElement = getElementDocument('body');
        body.classList.add('transform');

        const btn: HTMLElement = getElementDocument('.un-transform');
        btn.addEventListener('click', (): void => {
            if (body.classList.contains('transform')) body.classList.remove('transform');
        });

        while (target !== newsContainer) {
            assertIsDefined(target);
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                assertIsDefined(sourceId);
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
