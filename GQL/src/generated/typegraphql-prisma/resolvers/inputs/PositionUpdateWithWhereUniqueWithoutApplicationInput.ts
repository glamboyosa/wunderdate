import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionUpdateWithoutApplicationInput } from "../inputs/PositionUpdateWithoutApplicationInput";
import { PositionWhereUniqueInput } from "../inputs/PositionWhereUniqueInput";

@TypeGraphQL.InputType("PositionUpdateWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class PositionUpdateWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => PositionWhereUniqueInput, {
    nullable: false
  })
  where!: PositionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PositionUpdateWithoutApplicationInput, {
    nullable: false
  })
  data!: PositionUpdateWithoutApplicationInput;
}
