import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutUsersInput } from "../inputs/ApplicationCreateOrConnectWithoutUsersInput";
import { ApplicationCreateWithoutUsersInput } from "../inputs/ApplicationCreateWithoutUsersInput";
import { ApplicationUpdateWithoutUsersInput } from "../inputs/ApplicationUpdateWithoutUsersInput";
import { ApplicationUpsertWithoutUsersInput } from "../inputs/ApplicationUpsertWithoutUsersInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneRequiredWithoutUsersNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateOneRequiredWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutUsersInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutUsersInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutUsersInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUsersInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutUsersInput | undefined;
}
