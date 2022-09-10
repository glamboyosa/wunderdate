import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyUsersOnApplicationArgs } from "./args/FindManyUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class FindManyUsersOnApplicationResolver {
  @TypeGraphQL.Query(_returns => [UsersOnApplication], {
    nullable: false
  })
  async usersOnApplications(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUsersOnApplicationArgs): Promise<UsersOnApplication[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
