
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TitleComponent', () => {
  let fixture: ComponentFixture<TitleComponent>;
  let component: TitleComponent;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let target: TitleComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent]
    });

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    target = new TitleComponent();
    fixture.detectChanges();
  });

  describe('Interpolation Binding: field', () => {
    // it(`should use title field in HTML`, () => {
    //   component.title = 'fake';
    //   fixture.detectChanges();

    //   element = debugElement.query(By.css('h1')).nativeElement;
    //   expect(element.textContent).toBe('fake');
    // });

    // it(`should have title as 'todos' in class`, () => {
    //   expect(target.title).toBe('todos');
    // });

    it(`should use getTitle() in HTML`, () => {
      // Method 1
      // spyOn(component, 'getTitle').and.returnValue('fake');

      // Method 2
      spyOn(component, 'getTitle').and.callFake(() => {
        return 'fake';
      });
      fixture.detectChanges();

      // Method A
      // htmlElement = debugElement.query(By.css('h1')).nativeElement;
      // expect(htmlElement.textContent).toBe('fake');

      // Method B
      expect(component.getTitle).toHaveBeenCalled();
    });

    it(`should have getTitle() and return 'todos'`, () => {
      expect(target.getTitle()).toBe('todos');
    });
  });
});
