import {Entity, model, property} from '@loopback/repository';

@model()
export class TodoList extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;


  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}

export interface TodoListRelations {
  // describe navigational properties here
}

export type TodoListWithRelations = TodoList & TodoListRelations;
