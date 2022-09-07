import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationAvgAggregate } from "../outputs/ApplicationAvgAggregate";
import { ApplicationCountAggregate } from "../outputs/ApplicationCountAggregate";
import { ApplicationMaxAggregate } from "../outputs/ApplicationMaxAggregate";
import { ApplicationMinAggregate } from "../outputs/ApplicationMinAggregate";
import { ApplicationSumAggregate } from "../outputs/ApplicationSumAggregate";
import { Status } from "../../enums/Status";

@TypeGraphQL.ObjectType("ApplicationGroupBy", {
  isAbstract: true
})
export class ApplicationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  roleId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message!: string | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status!: "pending" | "accepted" | "rejected";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
