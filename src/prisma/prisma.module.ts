import { PrismaClient } from '../generated/prisma/client.js'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaPg } from '@prisma/adapter-pg'

const prismaProvider = {
  provide: PrismaClient,
  inject: [ConfigService],
  useFactory: (config: ConfigService) => {
    const connectionString = config.getOrThrow<string>('DATABASE_URL')
    const adapter = new PrismaPg({ connectionString })

    return new PrismaClient({ adapter })
  },
}

@Module({
  exports: [PrismaClient],
  providers: [prismaProvider],
})
export class PrismaModule {}
