import { expect, createTest } from '@ngx-playwright/test';

import { TodoScreen } from './screens/todo-screen.js';

const test = createTest(TodoScreen);

test.describe('TodoScreen', () => {
  test('should be able to add a todo item', async ({ screen }) => {
    await screen.addTodoAsync('My Todo');
    const myTodos = await screen.getAllTodosAsync();
    expect(myTodos).toEqual(['My Todo']);
  });
});
