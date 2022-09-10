import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUsersOnApplicationArgs } from "./args/FindUniqueUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class FindUniqueUsersOnApplicationResolver {
  @TypeGraphQL.Query(_returns => UsersOnApplication, {
    nullable: true
  })
  async usersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUsersOnApplicationArgs): Promise<UsersOnApplication | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
