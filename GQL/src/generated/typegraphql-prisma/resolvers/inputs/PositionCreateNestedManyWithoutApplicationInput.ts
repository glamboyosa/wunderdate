import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateManyApplicationInputEnvelope } from "../inputs/PositionCreateManyApplicationInputEnvelope";
import { PositionCreateOrConnectWithoutApplicationInput } from "../inputs/PositionCreateOrConnectWithoutApplicationInput";
import { PositionCreateWithoutApplicationInput } from "../inputs/PositionCreateWithoutApplicationInput";
import { PositionWhereUniqueInput } from "../inputs/PositionWhereUniqueInput";

@TypeGraphQL.InputType("PositionCreateNestedManyWithoutApplicationInput", {
  isAbstract: true
})
export class PositionCreateNestedManyWithoutApplicationInput {
  @TypeGraphQL.Field(_type => [PositionCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: PositionCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: PositionCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => PositionCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: PositionCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereUniqueInput], {
    nullable: true
  })
  connect?: PositionWhereUniqueInput[] | undefined;
}
