import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStatusFilter } from "../inputs/EnumStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ApplicationScalarWhereInput", {
  isAbstract: true
})
export class ApplicationScalarWhereInput {
  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  AND?: ApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  OR?: ApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  NOT?: ApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFilter, {
    nullable: true
  })
  status?: EnumStatusFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
