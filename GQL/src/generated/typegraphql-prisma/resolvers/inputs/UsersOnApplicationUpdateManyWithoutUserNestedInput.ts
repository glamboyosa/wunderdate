import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyUserInputEnvelope } from "../inputs/UsersOnApplicationCreateManyUserInputEnvelope";
import { UsersOnApplicationCreateOrConnectWithoutUserInput } from "../inputs/UsersOnApplicationCreateOrConnectWithoutUserInput";
import { UsersOnApplicationCreateWithoutUserInput } from "../inputs/UsersOnApplicationCreateWithoutUserInput";
import { UsersOnApplicationScalarWhereInput } from "../inputs/UsersOnApplicationScalarWhereInput";
import { UsersOnApplicationUpdateManyWithWhereWithoutUserInput } from "../inputs/UsersOnApplicationUpdateManyWithWhereWithoutUserInput";
import { UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput";
import { UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersOnApplicationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnApplicationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UsersOnApplicationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  set?: UsersOnApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UsersOnApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  delete?: UsersOnApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UsersOnApplicationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersOnApplicationScalarWhereInput[] | undefined;
}
