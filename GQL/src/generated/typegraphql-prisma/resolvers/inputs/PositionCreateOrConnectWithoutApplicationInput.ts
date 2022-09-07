import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateWithoutApplicationInput } from "../inputs/PositionCreateWithoutApplicationInput";
import { PositionWhereUniqueInput } from "../inputs/PositionWhereUniqueInput";

@TypeGraphQL.InputType("PositionCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class PositionCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => PositionWhereUniqueInput, {
    nullable: false
  })
  where!: PositionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PositionCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: PositionCreateWithoutApplicationInput;
}
