import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { TodoList, TodoListRelations } from '../models';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id,
  TodoListRelations
> {
  // other code

  // Add the following function
  public findByTitle(title: string) {
    return this.findOne({ where: { title } });
  }

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TodoList, dataSource);
  }
}
