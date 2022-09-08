import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyRoleInputEnvelope } from "../inputs/ApplicationCreateManyRoleInputEnvelope";
import { ApplicationCreateOrConnectWithoutRoleInput } from "../inputs/ApplicationCreateOrConnectWithoutRoleInput";
import { ApplicationCreateWithoutRoleInput } from "../inputs/ApplicationCreateWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedManyWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationCreateNestedManyWithoutRoleInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutRoleInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutRoleInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutRoleInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateManyRoleInputEnvelope, {
    nullable: true
  })
  createMany?: ApplicationCreateManyRoleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;
}
