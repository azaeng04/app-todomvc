import { ComponentHarness, TestKey } from '@angular/cdk/testing';

export class TodoComponentHarness extends ComponentHarness {
  static readonly hostSelector = 'app-todo';

  todoTextfield = this.locatorFor('.new-todo');
  allTodosList = this.locatorForAll('.todo-list label');

  protected async setTodoValueAsync(text: string) {
    const textfield = await this.todoTextfield();
    await textfield.setInputValue(text);
  }

  protected async pressEnterAsync() {
    const textfield = await this.todoTextfield();
    await textfield.sendKeys(TestKey.ENTER);
  }

  async getAllTodosAsync() {
    const todosEl = await this.allTodosList();
    const todos = await Promise.all(todosEl.map((el) => el.text()));
    return todos;
  }
}
