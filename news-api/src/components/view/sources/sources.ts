import { assertIsDefined, getElement } from '../../../supFunctions';
import { Lang, Source } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: Source[], currentLang: Lang): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        assertIsDefined(sourceItemTemp);

        data.forEach((item: Source) => {
            if (item.language === currentLang) {
                const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

                const itemName = getElement(sourceClone, '.source__item-name');
                itemName.textContent = item.name;

                const itemEl = getElement(sourceClone, '.source__item');

                itemEl.setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        const sources = document.querySelector('.sources');
        assertIsDefined(sources);

        sources.append(fragment);
    }
}

export default Sources;
