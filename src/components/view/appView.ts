import News from './news/news';
import Sources from './sources/sources';
// import ExtSourceInterface from '../interfaces/ext-source-interface';
import DataInterface from '../interfaces/data-interface';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: DataInterface) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: DataInterface) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
