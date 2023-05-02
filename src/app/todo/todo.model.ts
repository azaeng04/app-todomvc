export class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed?: boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed ? completed : false;
  }
}

export class TodoUtils {
  static copy(todo: Todo) {
    return this.copyProperties(todo);
  }

  static copyProperties(src: Todo | null) {
    if (!src) throw new Error(`Todo cannot be null`);
    return new Todo(src.id, src.title, src.completed);
  }
}
