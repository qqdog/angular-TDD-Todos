import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: string[] = [];
  // alternate: todos: Array<string> = [];

  /** HTMLInputElement 為 W3C 的物件，詳細可以參考 MDN */
  addTodo(todo: HTMLInputElement) {
    /**
     * 在 ES6 提供了 spread 寫法，在陣列之前加上 …，表示將陣列展開，
     * 最後在加上新資料，重新組一個新陣列，最後 this.todos 指標指向新的陣列。
     * 程式希望以 pure function 風格方式開發
     * 也就是原有的變數不再被修改，避免 side effect
     * 若資料要修改，就新增物件或陣列，而不是去改原有的資料
     * 符合 FRP 的流行
     */
    this.todos = [...this.todos, todo.value];
    // alternate(ES5): this.todos.push(todo.value);

    /**
     * 清空資料
     * JavaScript 的參數，本質都是以 pass by reference 傳入
     * 因此在 function 內去修改資料，就相當於去修改 DOM 的 HTMLInputElement 物件
     */
    todo.value = '';
  }
}
