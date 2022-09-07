import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionAvgOrderByAggregateInput } from "../inputs/PositionAvgOrderByAggregateInput";
import { PositionCountOrderByAggregateInput } from "../inputs/PositionCountOrderByAggregateInput";
import { PositionMaxOrderByAggregateInput } from "../inputs/PositionMaxOrderByAggregateInput";
import { PositionMinOrderByAggregateInput } from "../inputs/PositionMinOrderByAggregateInput";
import { PositionSumOrderByAggregateInput } from "../inputs/PositionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PositionOrderByWithAggregationInput", {
  isAbstract: true
})
export class PositionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  open?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  applicationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PositionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PositionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PositionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PositionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PositionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PositionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PositionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PositionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PositionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PositionSumOrderByAggregateInput | undefined;
}
