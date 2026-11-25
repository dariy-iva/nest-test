import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common'
import { TaskService } from './task.service.js'
import { CreateTaskDto } from './dto/create-task.dto.js'
import { UpdateTaskDto } from './dto/update-task.dto.js'
import { FindTaskQueryDto } from './dto/find-task-query.dto.js'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(@Query() query?: FindTaskQueryDto) {
    return await this.taskService.findAll(query)
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return await this.taskService.findOne(id)
  }

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.taskService.create(dto.title)
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    return await this.taskService.update(id, dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.taskService.delete(id)
  }
}
