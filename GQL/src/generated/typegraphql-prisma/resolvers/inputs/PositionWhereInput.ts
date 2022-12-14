import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationListRelationFilter } from "../inputs/ApplicationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PositionWhereInput", {
  isAbstract: true
})
export class PositionWhereInput {
  @TypeGraphQL.Field(_type => [PositionWhereInput], {
    nullable: true
  })
  AND?: PositionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereInput], {
    nullable: true
  })
  OR?: PositionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereInput], {
    nullable: true
  })
  NOT?: PositionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  open?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationListRelationFilter, {
    nullable: true
  })
  application?: ApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
