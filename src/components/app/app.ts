import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import scrollTo from '../app/up';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document
      ?.querySelector('.sources')
      ?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    this.controller.getSources((data) => this.view.drawSources(data));

    document.addEventListener('DOMContentLoaded', function () {
      const btn = document.querySelector('.buttonUp') as HTMLElement;
      btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
      };
    });
  }
}

export default App;
