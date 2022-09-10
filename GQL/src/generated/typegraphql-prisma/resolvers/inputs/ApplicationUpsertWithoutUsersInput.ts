import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutUsersInput } from "../inputs/ApplicationCreateWithoutUsersInput";
import { ApplicationUpdateWithoutUsersInput } from "../inputs/ApplicationUpdateWithoutUsersInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutUsersInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutUsersInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutUsersInput;
}
