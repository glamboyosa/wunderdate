import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregatePositionArgs } from "./args/AggregatePositionArgs";
import { Position } from "../../../models/Position";
import { AggregatePosition } from "../../outputs/AggregatePosition";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Position)
export class AggregatePositionResolver {
  @TypeGraphQL.Query(_returns => AggregatePosition, {
    nullable: false
  })
  async aggregatePosition(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePositionArgs): Promise<AggregatePosition> {
    return getPrismaFromContext(ctx).position.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
