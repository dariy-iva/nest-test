import { IsString, Matches, IsBoolean, ValidateIf } from 'class-validator'

export class UpdateTaskDto {
  @ValidateIf((_dto, value) => value !== undefined)
  @IsString()
  @Matches(/\S/, {
    message: 'Название должно содержать хотя бы один непробельный символ',
  })
  title?: string

  @ValidateIf((_dto, value) => value !== undefined)
  @IsBoolean()
  completed?: boolean
}
