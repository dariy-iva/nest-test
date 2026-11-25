import { IsString, Matches } from 'class-validator'

export class CreateTaskDto {
  @IsString()
  @Matches(/\S/, {
    message: 'Название должно содержать хотя бы один непробельный символ',
  })
  title!: string
}
