import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutRoleInput } from "../inputs/ApplicationCreateWithoutRoleInput";
import { ApplicationUpdateWithoutRoleInput } from "../inputs/ApplicationUpdateWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpsertWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationUpsertWithWhereUniqueWithoutRoleInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutRoleInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutRoleInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutRoleInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutRoleInput;
}
