import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUsersOnApplicationArgs } from "./args/DeleteOneUsersOnApplicationArgs";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class DeleteOneUsersOnApplicationResolver {
  @TypeGraphQL.Mutation(_returns => UsersOnApplication, {
    nullable: true
  })
  async deleteOneUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUsersOnApplicationArgs): Promise<UsersOnApplication | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
