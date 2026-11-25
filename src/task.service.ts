import { Injectable } from '@nestjs/common';
import {PrismaClient} from "./generated/prisma/client.js";

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaClient) {}

    findAll() {
        return this.prisma.task.findMany();
    }
}