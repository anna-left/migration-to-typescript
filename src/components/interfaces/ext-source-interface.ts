import SourceInterface from './source-interface';

interface ExtSourceInterface extends SourceInterface {
  category: string;
  country: string;
  description: string;
  language: string;
  url: string;
}

export default ExtSourceInterface;
