import './sources.css';
import ExtSourceInterface from '../../interfaces/ext-source-interface';

class Sources {
  draw(data: Array<ExtSourceInterface>) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item: ExtSourceInterface) => {
      const sourceClone: Element | undefined = sourceItemTemp?.content.cloneNode(true) as Element;
      if (sourceClone) {
        const sourceItemName = sourceClone.querySelector('.source__item-name');
        if (sourceItemName) {
          sourceItemName.textContent = item.name;
        }
        sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

        fragment.append(sourceClone);
      }
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
