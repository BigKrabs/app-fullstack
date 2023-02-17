import { Todo } from './models/todo.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { TodoService } from './todos.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [SequelizeModule.forFeature([Todo])],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {}