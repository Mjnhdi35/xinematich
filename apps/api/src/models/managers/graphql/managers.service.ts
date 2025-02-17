import { Injectable } from '@nestjs/common'
import { FindManyManagerArgs, FindUniqueManagerArgs } from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateManagerInput } from './dtos/create-manager.input'
import { UpdateManagerInput } from './dtos/update-manager.input'
import { Prisma } from '@prisma/client'

@Injectable()
export class ManagersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createManagerInput: CreateManagerInput) {
    return this.prisma.manager.create({
      data: createManagerInput,
    })
  }

  findAll(args: FindManyManagerArgs) {
    return this.prisma.manager.findMany(args as Prisma.ManagerFindManyArgs)
  }

  findOne(args: FindUniqueManagerArgs) {
    return this.prisma.manager.findUnique(args)
  }

  update(updateManagerInput: UpdateManagerInput) {
    const { id, ...data } = updateManagerInput
    return this.prisma.manager.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueManagerArgs) {
    return this.prisma.manager.delete(args)
  }
}
