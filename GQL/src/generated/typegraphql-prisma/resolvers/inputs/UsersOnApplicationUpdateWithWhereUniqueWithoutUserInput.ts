import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationUpdateWithoutUserInput } from "../inputs/UsersOnApplicationUpdateWithoutUserInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UsersOnApplicationUpdateWithoutUserInput;
}
