import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ManagersService } from './managers.service'
import { Manager } from './entity/manager.entity'
import { FindManyManagerArgs, FindUniqueManagerArgs } from './dtos/find.args'
import { CreateManagerInput } from './dtos/create-manager.input'
import { UpdateManagerInput } from './dtos/update-manager.input'
import { checkRowLevelPermission } from 'src/common/auth/util'
import { GetUserType } from 'src/common/types'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Cinema } from 'src/models/cinemas/graphql/entity/cinema.entity'

@Resolver(() => Manager)
export class ManagersResolver {
  constructor(
    private readonly managersService: ManagersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Manager)
  createManager(
    @Args('createManagerInput') args: CreateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id)
    return this.managersService.create(args)
  }

  @Query(() => [Manager], { name: 'managers' })
  findAll(@Args() args: FindManyManagerArgs) {
    return this.managersService.findAll(args)
  }

  @Query(() => Manager, { name: 'manager' })
  findOne(@Args() args: FindUniqueManagerArgs) {
    return this.managersService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  async updateManager(
    @Args('updateManagerInput') args: UpdateManagerInput,
    @GetUser() user: GetUserType,
  ) {
    const manager = await this.prisma.manager.findUnique({
      where: { id: args.id },
    })
    checkRowLevelPermission(user, manager.id)
    return this.managersService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => Manager)
  async removeManager(
    @Args() args: FindUniqueManagerArgs,
    @GetUser() user: GetUserType,
  ) {
    const manager = await this.prisma.manager.findUnique(args)
    checkRowLevelPermission(user, manager.id)
    return this.managersService.remove(args)
  }

  @ResolveField(() => Cinema, { nullable: true })
  cinema(@Parent() manager: Manager) {
    return this.prisma.cinema.findMany({
      where: {
        managers: { some: { id: manager.id } },
      },
    })
  }
  @AllowAuthenticated()
  @Query(() => Manager, { name: 'managerMe' })
  managerMe(@GetUser() user: GetUserType) {
    return this.managersService.findOne({
      where: { id: user.id },
    })
  }
}
