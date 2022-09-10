import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyApplicationInputEnvelope } from "../inputs/UsersOnApplicationCreateManyApplicationInputEnvelope";
import { UsersOnApplicationCreateOrConnectWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateOrConnectWithoutApplicationInput";
import { UsersOnApplicationCreateWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateWithoutApplicationInput";
import { UsersOnApplicationScalarWhereInput } from "../inputs/UsersOnApplicationScalarWhereInput";
import { UsersOnApplicationUpdateManyWithWhereWithoutApplicationInput } from "../inputs/UsersOnApplicationUpdateManyWithWhereWithoutApplicationInput";
import { UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput } from "../inputs/UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput";
import { UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput } from "../inputs/UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateManyWithoutApplicationNestedInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateManyWithoutApplicationNestedInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: UsersOnApplicationCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnApplicationCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  upsert?: UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: UsersOnApplicationCreateManyApplicationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  update?: UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationUpdateManyWithWhereWithoutApplicationInput], {
    nullable: true
  })
  updateMany?: UsersOnApplicationUpdateManyWithWhereWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UsersOnApplicationScalarWhereInput[] | undefined;
}
