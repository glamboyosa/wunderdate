import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutUsersInput } from "../inputs/ApplicationCreateWithoutUsersInput";
import { ApplicationUpdateWithoutUsersInput } from "../inputs/ApplicationUpdateWithoutUsersInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ApplicationUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutUsersInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutUsersInput;
}
