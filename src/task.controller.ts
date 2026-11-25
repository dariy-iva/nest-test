import { Controller, Get } from '@nestjs/common';
import {TaskService} from "./task.service.js";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    async findAll() {
        return await this.taskService.findAll();
    }
}