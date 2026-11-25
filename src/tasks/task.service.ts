import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'
import { PrismaClient, Prisma } from '../generated/prisma/client.js'
import { UpdateTaskDto } from './dto/update-task.dto.js'
import { FindTaskQueryDto } from './dto/find-task-query.dto.js'

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaClient) {}

  findAll(query?: FindTaskQueryDto) {
    const { title, completed } = query || {}

    return this.prisma.task.findMany({
      where: {
        ...(completed !== undefined ? { completed } : {}),
        ...(title !== undefined ? { title: { contains: title } } : {}),
      },
    })
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    })

    if (task === null) {
      throw new NotFoundException('Задача не найдена')
    }

    return task
  }

  create(title: string) {
    return this.prisma.task.create({ data: { title } })
  }

  async update(id: string, dto: UpdateTaskDto) {
    const { completed, title } = dto
    const hasCompleted = completed !== undefined
    const hasTitle = title !== undefined

    if (!hasCompleted && !hasTitle) {
      throw new BadRequestException('Укажи хотя бы одно поле для обновления')
    }

    try {
      return await this.prisma.task.update({
        where: { id },
        data: {
          ...(hasCompleted ? { completed } : {}),
          ...(hasTitle ? { title } : {}),
        },
      })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Задача не найдена')
      }

      throw error
    }
  }

  async delete(id: string) {
    try {
      return await this.prisma.task.delete({ where: { id } })
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('Задача не найдена')
      }

      throw error
    }
  }
}
