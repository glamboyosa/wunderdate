import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateManyApplicationInputEnvelope } from "../inputs/PositionCreateManyApplicationInputEnvelope";
import { PositionCreateOrConnectWithoutApplicationInput } from "../inputs/PositionCreateOrConnectWithoutApplicationInput";
import { PositionCreateWithoutApplicationInput } from "../inputs/PositionCreateWithoutApplicationInput";
import { PositionScalarWhereInput } from "../inputs/PositionScalarWhereInput";
import { PositionUpdateManyWithWhereWithoutApplicationInput } from "../inputs/PositionUpdateManyWithWhereWithoutApplicationInput";
import { PositionUpdateWithWhereUniqueWithoutApplicationInput } from "../inputs/PositionUpdateWithWhereUniqueWithoutApplicationInput";
import { PositionUpsertWithWhereUniqueWithoutApplicationInput } from "../inputs/PositionUpsertWithWhereUniqueWithoutApplicationInput";
import { PositionWhereUniqueInput } from "../inputs/PositionWhereUniqueInput";

@TypeGraphQL.InputType("PositionUpdateManyWithoutApplicationNestedInput", {
  isAbstract: true
})
export class PositionUpdateManyWithoutApplicationNestedInput {
  @TypeGraphQL.Field(_type => [PositionCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: PositionCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: PositionCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionUpsertWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  upsert?: PositionUpsertWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => PositionCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: PositionCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereUniqueInput], {
    nullable: true
  })
  set?: PositionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PositionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereUniqueInput], {
    nullable: true
  })
  delete?: PositionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionWhereUniqueInput], {
    nullable: true
  })
  connect?: PositionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionUpdateWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  update?: PositionUpdateWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionUpdateManyWithWhereWithoutApplicationInput], {
    nullable: true
  })
  updateMany?: PositionUpdateManyWithWhereWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PositionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PositionScalarWhereInput[] | undefined;
}
