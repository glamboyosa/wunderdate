import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { User } from "../../../models/User";
import { UserApplicationsArgs } from "./args/UserApplicationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Application], {
    nullable: false
  })
  async applications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserApplicationsArgs): Promise<Application[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).applications(args);
  }
}
