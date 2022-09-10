import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationAvgOrderByAggregateInput } from "../inputs/UsersOnApplicationAvgOrderByAggregateInput";
import { UsersOnApplicationCountOrderByAggregateInput } from "../inputs/UsersOnApplicationCountOrderByAggregateInput";
import { UsersOnApplicationMaxOrderByAggregateInput } from "../inputs/UsersOnApplicationMaxOrderByAggregateInput";
import { UsersOnApplicationMinOrderByAggregateInput } from "../inputs/UsersOnApplicationMinOrderByAggregateInput";
import { UsersOnApplicationSumOrderByAggregateInput } from "../inputs/UsersOnApplicationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UsersOnApplicationOrderByWithAggregationInput", {
  isAbstract: true
})
export class UsersOnApplicationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => UsersOnApplicationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UsersOnApplicationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UsersOnApplicationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UsersOnApplicationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UsersOnApplicationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UsersOnApplicationSumOrderByAggregateInput | undefined;
}
