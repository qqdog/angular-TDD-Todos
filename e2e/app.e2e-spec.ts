import { protractor } from 'protractor/built/ptor';

import { DemoPage } from './app.po';

describe('demo App', () => {
  let page: DemoPage;

  beforeEach(() => {
    page = new DemoPage();
  });

  it(`should display 'todos' in h1`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it(`should display 'what needs to be done?' on 'placeholder' attribute`, () => {
    page.navigateTo();
    expect(page.getPlaceHolder()).toBe('what needs to be done?');
  });

  it(`should be empty after pressing enter`, () => {
    page.navigateTo()
        .setTodo('Study Angular')
        .setTodo(protractor.Key.ENTER);

    expect(page.getTodos()).toBe('');
  });
});
