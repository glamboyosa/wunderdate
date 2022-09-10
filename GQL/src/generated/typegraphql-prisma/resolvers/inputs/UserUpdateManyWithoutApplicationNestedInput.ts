import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyApplicationInputEnvelope } from "../inputs/UserCreateManyApplicationInputEnvelope";
import { UserCreateOrConnectWithoutApplicationInput } from "../inputs/UserCreateOrConnectWithoutApplicationInput";
import { UserCreateWithoutApplicationInput } from "../inputs/UserCreateWithoutApplicationInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutApplicationInput } from "../inputs/UserUpdateManyWithWhereWithoutApplicationInput";
import { UserUpdateWithWhereUniqueWithoutApplicationInput } from "../inputs/UserUpdateWithWhereUniqueWithoutApplicationInput";
import { UserUpsertWithWhereUniqueWithoutApplicationInput } from "../inputs/UserUpsertWithWhereUniqueWithoutApplicationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutApplicationNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutApplicationNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: UserCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutApplicationInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
