import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutApplicationsInput } from "../inputs/UserCreateOrConnectWithoutApplicationsInput";
import { UserCreateWithoutApplicationsInput } from "../inputs/UserCreateWithoutApplicationsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutApplicationsInput } from "../inputs/UserUpdateManyWithWhereWithoutApplicationsInput";
import { UserUpdateWithWhereUniqueWithoutApplicationsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutApplicationsInput";
import { UserUpsertWithWhereUniqueWithoutApplicationsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutApplicationsNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutApplicationsNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutApplicationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutApplicationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutApplicationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApplicationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutApplicationsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutApplicationsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutApplicationsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutApplicationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutApplicationsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutApplicationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
