import { TodoComponentHarness } from 'src/app/todo/todo.component.harness';

export class TodoScreen extends TodoComponentHarness {
  static path = '/';

  async addTodoAsync(text: string) {
    await this.setTodoValueAsync(text);
    await this.pressEnterAsync();
  }
}
