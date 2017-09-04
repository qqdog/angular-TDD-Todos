
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { TitleComponent } from './title/title.component';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleComponent
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new AppComponent();
    fixture.detectChanges();
  });

  describe(`TitleComponent`, () => {
    it('should use app-title in HTML', () => {
      htmlElement = debugElement.query(By.css('app-title')).nativeElement;
      expect(htmlElement).toBeTruthy();
    });
  });

  describe(`Property Binding`, () => {
    it(`should use 'inputHint' field on 'placeholder' attribute in HTML`, () => {
      component.inputHint = 'fake';
      fixture.detectChanges();

      htmlElement = debugElement.query(By.css('.new-todo')).nativeElement;
      expect(htmlElement.getAttribute('placeholder')).toBe('fake');
    });

    it(`should have inputHint field as 'What needs to be done?' in class`, () => {
      expect(target.inputHint).toBe('What needs to be done?');
    });
  });

  describe(`Event Binding`, () => {
    it(`should use 'addTodo()' on 'keyup.enter' event in HTML`, () => {
      spyOn(component, 'addTodo');
      debugElement.query(By.css('.new-todo')).triggerEventHandler('keyup.enter', null);

      expect(component.addTodo).toHaveBeenCalled();
    });


    it(`should have 'addTodo()' to push todo to an array and clear todo`, () => {
      /**
       *  建立假的 HTMLInputElement 物件(強制把 Object 轉型別)
       *
       *  補充：一般強型別語言提到轉型，會使用 () 語法
       *  不過 TypeScript 並沒有使用 ()，而使用 <>
       *  主要是因為型別在 TypeScript 只提供編譯時期檢查，
       *  而非強行別語言在執行時期轉型，因此採用泛型的 <> 語法
       *  強調 type assertion 是編譯時期轉型，而非執行時期轉型。
      */
      const todoStub = <HTMLInputElement>{
        'value': 'fake'
      };
      target.addTodo(todoStub);

      expect(target.todos.length).toBe(1);
      expect(todoStub.value).toBe('');
    });
  });
});
