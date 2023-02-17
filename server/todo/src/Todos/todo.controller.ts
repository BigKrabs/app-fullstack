import { ChangeTodo } from './dto/change-todo.dto';
import { Get, Controller, Param, HttpCode, HttpStatus, Post, Header, Body, Patch, Delete } from '@nestjs/common';
import { CreateTodo } from './dto/create-todo.dto';
import { TodoService } from './todos.service';

@Controller('todos')
export class TodoController {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Get()
    getAllTodods() {
        return this.todoService.findAll();
    }

    @Get(':id')
    getOneTodod(@Param('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    createTodo(@Body() createTodo: CreateTodo) {
        return this.todoService.create(createTodo);
    }

    @Patch(':id')
    changeTodo(@Body() changeTodo: ChangeTodo, @Param('id') id: string ) {
        return this.todoService.update(id, changeTodo);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        return this.todoService.remove(id);
    }
}