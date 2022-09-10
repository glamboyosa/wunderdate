import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApplicationInput } from "../inputs/UserCreateWithoutApplicationInput";
import { UserUpdateWithoutApplicationInput } from "../inputs/UserUpdateWithoutApplicationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: UserUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: UserCreateWithoutApplicationInput;
}
