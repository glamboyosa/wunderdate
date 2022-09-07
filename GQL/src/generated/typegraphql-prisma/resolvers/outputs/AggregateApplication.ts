import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationAvgAggregate } from "../outputs/ApplicationAvgAggregate";
import { ApplicationCountAggregate } from "../outputs/ApplicationCountAggregate";
import { ApplicationMaxAggregate } from "../outputs/ApplicationMaxAggregate";
import { ApplicationMinAggregate } from "../outputs/ApplicationMinAggregate";
import { ApplicationSumAggregate } from "../outputs/ApplicationSumAggregate";

@TypeGraphQL.ObjectType("AggregateApplication", {
  isAbstract: true
})
export class AggregateApplication {
  @TypeGraphQL.Field(_type => ApplicationCountAggregate, {
    nullable: true
  })
  _count!: ApplicationCountAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationAvgAggregate, {
    nullable: true
  })
  _avg!: ApplicationAvgAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationSumAggregate, {
    nullable: true
  })
  _sum!: ApplicationSumAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationMinAggregate, {
    nullable: true
  })
  _min!: ApplicationMinAggregate | null;

  @TypeGraphQL.Field(_type => ApplicationMaxAggregate, {
    nullable: true
  })
  _max!: ApplicationMaxAggregate | null;
}
