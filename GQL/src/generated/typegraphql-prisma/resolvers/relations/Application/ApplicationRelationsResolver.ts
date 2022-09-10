import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Comment } from "../../../models/Comment";
import { Position } from "../../../models/Position";
import { User } from "../../../models/User";
import { UsersOnApplication } from "../../../models/UsersOnApplication";
import { ApplicationCommentsArgs } from "./args/ApplicationCommentsArgs";
import { ApplicationUserArgs } from "./args/ApplicationUserArgs";
import { ApplicationUsersArgs } from "./args/ApplicationUsersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Application)
export class ApplicationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Position, {
    nullable: false
  })
  async role(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any): Promise<Position> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).role({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ApplicationCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [UsersOnApplication], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ApplicationUsersArgs): Promise<UsersOnApplication[]> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async User(@TypeGraphQL.Root() application: Application, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ApplicationUserArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).application.findUnique({
      where: {
        id: application.id,
      },
    }).User(args);
  }
}
