import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'dd95134bce9e4f7a8977d915e128b282', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
