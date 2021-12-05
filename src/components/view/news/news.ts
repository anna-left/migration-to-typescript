import './news.css';
import ArticleInterface from '../../interfaces/article-interface';

class News {
  draw(data: Array<ArticleInterface>) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLElement;

      const newsItem = newsClone.querySelector('.news__item');

      if (newsItem && idx % 2) newsItem.classList.add('alt');
      const newMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      if (newMetaPhoto) {
        newMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      }
      const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
      if (newsMetaAuthor) {
        newsMetaAuthor.textContent = item.author || item.source.name;
      }
      const newsMetaDate = newsClone.querySelector('.news__meta-date');
      if (newsMetaDate) {
        newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
      }
      const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
      if (newsDescriptionTitle) {
        newsDescriptionTitle.textContent = item.title;
      }
      const newsDescriptionSource = newsClone.querySelector('.news__description-source');
      if (newsDescriptionSource) {
        newsDescriptionSource.textContent = item.source.name;
      }
      const newsDescriptionContent = newsClone.querySelector('.news__description-content');
      if (newsDescriptionContent) {
        newsDescriptionContent.textContent = item.description;
      }
      const newsReadMoreA = newsClone.querySelector('.news__read-more a');
      if (newsReadMoreA) {
        newsReadMoreA.setAttribute('href', item.url);
      }
      fragment.append(newsClone);
    });

    const elemNews = document.querySelector('.news');
    if (elemNews) {
      elemNews.innerHTML = '';
      elemNews.appendChild(fragment);
    }
  }
}

export default News;
