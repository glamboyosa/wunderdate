import * as TypeGraphQL from "type-graphql";
import { Application } from "../../../models/Application";
import { Position } from "../../../models/Position";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Position)
export class PositionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Application, {
    nullable: true
  })
  async application(@TypeGraphQL.Root() position: Position, @TypeGraphQL.Ctx() ctx: any): Promise<Application | null> {
    return getPrismaFromContext(ctx).position.findUnique({
      where: {
        id: position.id,
      },
    }).application({});
  }
}
