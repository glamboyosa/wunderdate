import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionAvgAggregate } from "../outputs/PositionAvgAggregate";
import { PositionCountAggregate } from "../outputs/PositionCountAggregate";
import { PositionMaxAggregate } from "../outputs/PositionMaxAggregate";
import { PositionMinAggregate } from "../outputs/PositionMinAggregate";
import { PositionSumAggregate } from "../outputs/PositionSumAggregate";

@TypeGraphQL.ObjectType("PositionGroupBy", {
  isAbstract: true
})
export class PositionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  open!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  applicationId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PositionCountAggregate, {
    nullable: true
  })
  _count!: PositionCountAggregate | null;

  @TypeGraphQL.Field(_type => PositionAvgAggregate, {
    nullable: true
  })
  _avg!: PositionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PositionSumAggregate, {
    nullable: true
  })
  _sum!: PositionSumAggregate | null;

  @TypeGraphQL.Field(_type => PositionMinAggregate, {
    nullable: true
  })
  _min!: PositionMinAggregate | null;

  @TypeGraphQL.Field(_type => PositionMaxAggregate, {
    nullable: true
  })
  _max!: PositionMaxAggregate | null;
}
