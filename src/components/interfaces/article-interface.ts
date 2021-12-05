import SourceInterface from './source-interface';

interface ArticleInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceInterface;
  title: string;
  url: string;
  urlToImage: string;
}

export default ArticleInterface;
