import AppLoader from './appLoader';
import DataInterface from '../interfaces/data-interface';

class AppController extends AppLoader {
  getSources(callback: ((data: DataInterface) => void) | undefined) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback,
    );
  }

  getNews(e: Event, callback: ((data: DataInterface) => void) | undefined) {
    let target: Element | null = e.target as Element;
    const newsContainer = e.currentTarget as Element;

    while (target !== newsContainer) {
      if (target && target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (newsContainer) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            if (sourceId) {
              newsContainer.setAttribute('data-source', sourceId);
              super.getResp(
                {
                  endpoint: 'everything',
                  options: {
                    sources: sourceId,
                  },
                },
                callback,
              );
            }
          }
        }
        return;
      }
      target = target.parentNode as Element;
    }
  }
}

export default AppController;
