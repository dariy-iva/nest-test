import { plainToInstance, Type } from 'class-transformer'
import {
  IsInt,
  Max,
  Min,
  IsIn,
  IsString,
  IsNotEmpty,
  validateSync,
} from 'class-validator'

class EnvConfig {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(65535)
  PORT!: number

  @IsIn(['development', 'test', 'production'])
  NODE_ENV!: 'development' | 'test' | 'production'

  @IsString()
  @IsNotEmpty()
  DATABASE_URL!: string
}

export function validateEnv(raw: Record<string, unknown>) {
  const config = plainToInstance(EnvConfig, {
    PORT: 3000,
    NODE_ENV: 'development',
    ...raw,
  })

  const errors = validateSync(config, { skipMissingProperties: false })

  if (errors.length > 0) {
    const messages = errors.flatMap((error) =>
      Object.values(error.constraints ?? {}),
    )

    throw new Error(`Ошибка конфигурации: ${messages.join('; ')}`)
  }

  return config
}
