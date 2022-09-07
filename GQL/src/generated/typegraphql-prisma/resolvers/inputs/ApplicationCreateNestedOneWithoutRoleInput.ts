import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutRoleInput } from "../inputs/ApplicationCreateOrConnectWithoutRoleInput";
import { ApplicationCreateWithoutRoleInput } from "../inputs/ApplicationCreateWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedOneWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationCreateNestedOneWithoutRoleInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutRoleInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutRoleInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;
}
