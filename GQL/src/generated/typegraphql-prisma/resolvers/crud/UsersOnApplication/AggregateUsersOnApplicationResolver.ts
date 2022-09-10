import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersOnApplicationArgs } from "./args/AggregateUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { AggregateUsersOnApplication } from "../../outputs/AggregateUsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class AggregateUsersOnApplicationResolver {
  @TypeGraphQL.Query(_returns => AggregateUsersOnApplication, {
    nullable: false
  })
  async aggregateUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersOnApplicationArgs): Promise<AggregateUsersOnApplication> {
    return getPrismaFromContext(ctx).usersOnApplication.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
