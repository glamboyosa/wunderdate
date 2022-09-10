import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationOrderByWithAggregationInput } from "../../../inputs/UsersOnApplicationOrderByWithAggregationInput";
import { UsersOnApplicationScalarWhereWithAggregatesInput } from "../../../inputs/UsersOnApplicationScalarWhereWithAggregatesInput";
import { UsersOnApplicationWhereInput } from "../../../inputs/UsersOnApplicationWhereInput";
import { UsersOnApplicationScalarFieldEnum } from "../../../../enums/UsersOnApplicationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  where?: UsersOnApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UsersOnApplicationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "applicationId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => UsersOnApplicationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UsersOnApplicationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
