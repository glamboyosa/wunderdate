import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateWithoutApplicationInput } from "../inputs/PositionCreateWithoutApplicationInput";
import { PositionUpdateWithoutApplicationInput } from "../inputs/PositionUpdateWithoutApplicationInput";
import { PositionWhereUniqueInput } from "../inputs/PositionWhereUniqueInput";

@TypeGraphQL.InputType("PositionUpsertWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class PositionUpsertWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => PositionWhereUniqueInput, {
    nullable: false
  })
  where!: PositionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PositionUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: PositionUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => PositionCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: PositionCreateWithoutApplicationInput;
}
