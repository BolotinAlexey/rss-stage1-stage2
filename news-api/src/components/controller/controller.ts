import { assertIsDefined } from '../../supFunctions';
import { CallbackFunctionEmpty, Endpoint } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: CallbackFunctionEmpty) {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackFunctionEmpty) {
        let target: EventTarget | null = e.target;
        assertIsDefined(target);
        if (!(target instanceof Element)) throw new Error('Error');

        const newsContainer = e.currentTarget;
        assertIsDefined(newsContainer);
        if (!(newsContainer instanceof Element)) throw new Error('Error');

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
