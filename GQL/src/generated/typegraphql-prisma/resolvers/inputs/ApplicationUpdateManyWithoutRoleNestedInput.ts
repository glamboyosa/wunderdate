import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyRoleInputEnvelope } from "../inputs/ApplicationCreateManyRoleInputEnvelope";
import { ApplicationCreateOrConnectWithoutRoleInput } from "../inputs/ApplicationCreateOrConnectWithoutRoleInput";
import { ApplicationCreateWithoutRoleInput } from "../inputs/ApplicationCreateWithoutRoleInput";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyWithWhereWithoutRoleInput } from "../inputs/ApplicationUpdateManyWithWhereWithoutRoleInput";
import { ApplicationUpdateWithWhereUniqueWithoutRoleInput } from "../inputs/ApplicationUpdateWithWhereUniqueWithoutRoleInput";
import { ApplicationUpsertWithWhereUniqueWithoutRoleInput } from "../inputs/ApplicationUpsertWithWhereUniqueWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateManyWithoutRoleNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateManyWithoutRoleNestedInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutRoleInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpsertWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  upsert?: ApplicationUpsertWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  set?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  delete?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateWithWhereUniqueWithoutRoleInput], {
    nullable: true
  })
  update?: ApplicationUpdateWithWhereUniqueWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateManyWithWhereWithoutRoleInput], {
    nullable: true
  })
  updateMany?: ApplicationUpdateManyWithWhereWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApplicationScalarWhereInput[] | undefined;
}
