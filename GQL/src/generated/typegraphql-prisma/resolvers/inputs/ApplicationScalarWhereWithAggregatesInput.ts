import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumStatusWithAggregatesFilter } from "../inputs/EnumStatusWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("ApplicationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ApplicationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  message?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
