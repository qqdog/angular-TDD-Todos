
import { browser, by, element } from 'protractor';

export class DemoPage {
  navigateTo(): DemoPage {
    browser.get('/');

    return this;
  }

  /**
   * 嚴格來說，getText() 回傳的型別是 promise.Promise<string>，
   * 這是 ES6 的非同步型別，將來會專門討論 Promise，先以 any 表示即可。
   * by Sam
   * */
  getTodos(): any {
    return element(by.css('app-root h1')).getText();
  }

  getPlaceHolder(): any {
    return element(by.css('.new-todo')).getAttribute('placeholder');
  }

  /**
   * Page object 為了配合使用 fluent interface，
   * 只要是操作動作，都會傳 DemoPage 本身 page object 型別，然後 return this
   * by Sam
   * But not understanding....?????
   */
  setTodo(input: string): DemoPage {
    element(by.css('.new-todo')).sendKeys(input);

    return this;
  }

  /**
   * getAttribute() 回傳也是 promise.Promise<string>，暫時以 any 表示即可。
   * the same as getText()
   */
  getTodo(): any {
    return element(by.css('.new-todo')).getAttribute('value');
  }
}
