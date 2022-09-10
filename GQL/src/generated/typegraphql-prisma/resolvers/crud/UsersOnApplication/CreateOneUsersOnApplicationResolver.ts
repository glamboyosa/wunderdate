import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneUsersOnApplicationArgs } from "./args/CreateOneUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class CreateOneUsersOnApplicationResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnApplication, {
    nullable: false
  })
  async createOneUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUsersOnApplicationArgs): Promise<UsersOnApplication> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
