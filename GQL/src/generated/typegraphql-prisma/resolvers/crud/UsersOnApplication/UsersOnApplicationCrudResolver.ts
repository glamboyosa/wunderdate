import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersOnApplicationArgs } from "./args/AggregateUsersOnApplicationArgs";
import { CreateManyUsersOnApplicationArgs } from "./args/CreateManyUsersOnApplicationArgs";
import { CreateOneUsersOnApplicationArgs } from "./args/CreateOneUsersOnApplicationArgs";
import { DeleteManyUsersOnApplicationArgs } from "./args/DeleteManyUsersOnApplicationArgs";
import { DeleteOneUsersOnApplicationArgs } from "./args/DeleteOneUsersOnApplicationArgs";
import { FindFirstUsersOnApplicationArgs } from "./args/FindFirstUsersOnApplicationArgs";
import { FindManyUsersOnApplicationArgs } from "./args/FindManyUsersOnApplicationArgs";
import { FindUniqueUsersOnApplicationArgs } from "./args/FindUniqueUsersOnApplicationArgs";
import { GroupByUsersOnApplicationArgs } from "./args/GroupByUsersOnApplicationArgs";
import { UpdateManyUsersOnApplicationArgs } from "./args/UpdateManyUsersOnApplicationArgs";
import { UpdateOneUsersOnApplicationArgs } from "./args/UpdateOneUsersOnApplicationArgs";
import { UpsertOneUsersOnApplicationArgs } from "./args/UpsertOneUsersOnApplicationArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsersOnApplication } from "../../outputs/AggregateUsersOnApplication";
import { UsersOnApplicationGroupBy } from "../../outputs/UsersOnApplicationGroupBy";

@TypeGraphQL.Resolver(_of => UsersOnApplication)
export class UsersOnApplicationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateUsersOnApplication, {
    nullable: false
  })
  async aggregateUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersOnApplicationArgs): Promise<AggregateUsersOnApplication> {
    return getPrismaFromContext(ctx).usersOnApplication.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUsersOnApplicationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUsersOnApplicationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => UsersOnApplication, {
    nullable: true
  })
  async findFirstUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUsersOnApplicationArgs): Promise<UsersOnApplication | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUsersOnApplicationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersOnApplication, {
    nullable: true
  })
  async updateOneUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUsersOnApplicationArgs): Promise<UsersOnApplication | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersOnApplication, {
    nullable: false
  })
  async upsertOneUsersOnApplication(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneUsersOnApplicationArgs): Promise<UsersOnApplication> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersOnApplication.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
