import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { User } from "../../../models/User";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { UserApplicationsArgs } from "./args/UserApplicationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UsersOnApplication], {
    nullable: false
  })
  async applications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserApplicationsArgs): Promise<UsersOnApplication[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).applications(args);
  }

  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: true
  })
  async Application(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any): Promise<Application | null> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).Application({});
  }
}
