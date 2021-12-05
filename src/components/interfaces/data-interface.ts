// import News from '../view/news/news';
import ArticleInterface from './article-interface';
import ExtSourceInterface from '../interfaces/ext-source-interface';

interface DataInterface {
  articles: Array<ArticleInterface>;
  status: string;
  totalResults: number;
  publishedAt: string;
  sources: Array<ExtSourceInterface>;
}

export default DataInterface;
