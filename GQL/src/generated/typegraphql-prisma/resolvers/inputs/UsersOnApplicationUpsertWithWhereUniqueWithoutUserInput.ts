import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateWithoutUserInput } from "../inputs/UsersOnApplicationCreateWithoutUserInput";
import { UsersOnApplicationUpdateWithoutUserInput } from "../inputs/UsersOnApplicationUpdateWithoutUserInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UsersOnApplicationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateWithoutUserInput, {
    nullable: false
  })
  create!: UsersOnApplicationCreateWithoutUserInput;
}
