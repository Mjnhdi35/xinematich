import { IsIn, IsOptional } from 'class-validator'
import { Prisma } from '@prisma/client'
import { BaseQueryDto } from 'src/common/dtos/common.dto'

export class TicketQueryDto extends BaseQueryDto {
  @IsOptional()
  @IsIn(Object.values(Prisma.TicketScalarFieldEnum))
  sortBy?: string

  @IsOptional()
  @IsIn(Object.values(Prisma.TicketScalarFieldEnum))
  searchBy?: string
}
