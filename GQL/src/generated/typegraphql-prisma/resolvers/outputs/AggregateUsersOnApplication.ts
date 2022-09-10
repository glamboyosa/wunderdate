import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationAvgAggregate } from "../outputs/UsersOnApplicationAvgAggregate";
import { UsersOnApplicationCountAggregate } from "../outputs/UsersOnApplicationCountAggregate";
import { UsersOnApplicationMaxAggregate } from "../outputs/UsersOnApplicationMaxAggregate";
import { UsersOnApplicationMinAggregate } from "../outputs/UsersOnApplicationMinAggregate";
import { UsersOnApplicationSumAggregate } from "../outputs/UsersOnApplicationSumAggregate";

@TypeGraphQL.ObjectType("AggregateUsersOnApplication", {
  isAbstract: true
})
export class AggregateUsersOnApplication {
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
