import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateWithoutUserInput } from "../inputs/UsersOnApplicationCreateWithoutUserInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateWithoutUserInput, {
    nullable: false
  })
  create!: UsersOnApplicationCreateWithoutUserInput;
}
