import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { User } from "../../../models/User";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class UsersOnApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() usersOnApplication: UsersOnApplication, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).usersOnApplication.findUnique({
      where: {
        userId_applicationId: {
          userId: usersOnApplication.userId,
          applicationId: usersOnApplication.applicationId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: false
  })
  async application(@TypeGraphQL.Root() usersOnApplication: UsersOnApplication, @TypeGraphQL.Ctx() ctx: any): Promise<Application> {
    return getPrismaFromContext(ctx).usersOnApplication.findUnique({
      where: {
        userId_applicationId: {
          userId: usersOnApplication.userId,
          applicationId: usersOnApplication.applicationId,
        },
      },
    }).application({});
  }
}
