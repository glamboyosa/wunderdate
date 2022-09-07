import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutRoleInput } from "../inputs/ApplicationCreateOrConnectWithoutRoleInput";
import { ApplicationCreateWithoutRoleInput } from "../inputs/ApplicationCreateWithoutRoleInput";
import { ApplicationUpdateWithoutRoleInput } from "../inputs/ApplicationUpdateWithoutRoleInput";
import { ApplicationUpsertWithoutRoleInput } from "../inputs/ApplicationUpsertWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneWithoutRoleNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateOneWithoutRoleNestedInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutRoleInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutRoleInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutRoleInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutRoleInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutRoleInput | undefined;
}
