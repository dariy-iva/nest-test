import { IsString, Matches, IsBoolean, ValidateIf } from 'class-validator'
import { Transform } from 'class-transformer'

export class FindTaskQueryDto {
  @ValidateIf((_dto, value) => value !== undefined)
  @IsString()
  @Matches(/\S/)
  title?: string

  @Transform(({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false
    return value
  })
  @ValidateIf((_dto, value) => value !== undefined)
  @IsBoolean()
  completed?: boolean
}
