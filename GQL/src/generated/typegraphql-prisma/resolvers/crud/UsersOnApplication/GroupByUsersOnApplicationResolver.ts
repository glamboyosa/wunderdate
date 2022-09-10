import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUsersOnApplicationArgs } from "./args/GroupByUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { UsersOnApplicationGroupBy } from "../../outputs/UsersOnApplicationGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class GroupByUsersOnApplicationResolver {
  @TypeGraphQL.Query(_returns => [UsersOnApplicationGroupBy], {
    nullable: false
  })
  async groupByUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUsersOnApplicationArgs): Promise<UsersOnApplicationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
