import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationAvgAggregate } from "../outputs/UsersOnApplicationAvgAggregate";
import { UsersOnApplicationCountAggregate } from "../outputs/UsersOnApplicationCountAggregate";
import { UsersOnApplicationMaxAggregate } from "../outputs/UsersOnApplicationMaxAggregate";
import { UsersOnApplicationMinAggregate } from "../outputs/UsersOnApplicationMinAggregate";
import { UsersOnApplicationSumAggregate } from "../outputs/UsersOnApplicationSumAggregate";

@TypeGraphQL.ObjectType("UsersOnApplicationGroupBy", {
  isAbstract: true
})
export class UsersOnApplicationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  applicationId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UsersOnApplicationCountAggregate, {
    nullable: true
  })
  _count!: UsersOnApplicationCountAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnApplicationAvgAggregate, {
    nullable: true
  })
  _avg!: UsersOnApplicationAvgAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnApplicationSumAggregate, {
    nullable: true
  })
  _sum!: UsersOnApplicationSumAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnApplicationMinAggregate, {
    nullable: true
  })
  _min!: UsersOnApplicationMinAggregate | null;

  @TypeGraphQL.Field(_type => UsersOnApplicationMaxAggregate, {
    nullable: true
  })
  _max!: UsersOnApplicationMaxAggregate | null;
}
