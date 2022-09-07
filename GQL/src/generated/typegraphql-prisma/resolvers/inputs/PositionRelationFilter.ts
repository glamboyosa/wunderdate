import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionWhereInput } from "../inputs/PositionWhereInput";

@TypeGraphQL.InputType("PositionRelationFilter", {
  isAbstract: true
})
export class PositionRelationFilter {
  @TypeGraphQL.Field(_type => PositionWhereInput, {
    nullable: true
  })
  is?: PositionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PositionWhereInput, {
    nullable: true
  })
  isNot?: PositionWhereInput | undefined;
}
