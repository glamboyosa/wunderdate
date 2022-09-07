import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutUsersInput } from "../inputs/ApplicationCreateOrConnectWithoutUsersInput";
import { ApplicationCreateWithoutUsersInput } from "../inputs/ApplicationCreateWithoutUsersInput";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyWithWhereWithoutUsersInput } from "../inputs/ApplicationUpdateManyWithWhereWithoutUsersInput";
import { ApplicationUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/ApplicationUpdateWithWhereUniqueWithoutUsersInput";
import { ApplicationUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/ApplicationUpsertWithWhereUniqueWithoutUsersInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: ApplicationUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ApplicationUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: ApplicationUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: ApplicationUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ApplicationScalarWhereInput[] | undefined;
}
