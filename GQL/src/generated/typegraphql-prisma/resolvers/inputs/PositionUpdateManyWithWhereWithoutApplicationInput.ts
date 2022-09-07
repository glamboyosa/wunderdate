import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionScalarWhereInput } from "../inputs/PositionScalarWhereInput";
import { PositionUpdateManyMutationInput } from "../inputs/PositionUpdateManyMutationInput";

@TypeGraphQL.InputType("PositionUpdateManyWithWhereWithoutApplicationInput", {
  isAbstract: true
})
export class PositionUpdateManyWithWhereWithoutApplicationInput {
  @TypeGraphQL.Field(_type => PositionScalarWhereInput, {
    nullable: false
  })
  where!: PositionScalarWhereInput;

  @TypeGraphQL.Field(_type => PositionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PositionUpdateManyMutationInput;
}
