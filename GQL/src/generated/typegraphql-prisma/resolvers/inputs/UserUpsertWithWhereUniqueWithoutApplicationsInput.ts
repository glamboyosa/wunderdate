import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApplicationsInput } from "../inputs/UserCreateWithoutApplicationsInput";
import { UserUpdateWithoutApplicationsInput } from "../inputs/UserUpdateWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutApplicationsInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutApplicationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutApplicationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApplicationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutApplicationsInput;
}
