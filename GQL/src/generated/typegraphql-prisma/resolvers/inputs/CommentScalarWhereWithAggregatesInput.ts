import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CommentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CommentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CommentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  from?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  applicationId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
