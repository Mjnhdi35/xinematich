import { User } from '@prisma/client'
import { IsOptional } from 'class-validator'

import { RestrictProperties } from 'src/common/dtos/common.input'

export class UserEntity implements RestrictProperties<UserEntity, User> {
  @IsOptional()
  image: string
  @IsOptional()
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
}
