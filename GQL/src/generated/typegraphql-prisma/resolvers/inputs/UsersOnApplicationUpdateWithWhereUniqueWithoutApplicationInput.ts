import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationUpdateWithoutApplicationInput } from "../inputs/UsersOnApplicationUpdateWithoutApplicationInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateWithoutApplicationInput, {
    nullable: false
  })
  data!: UsersOnApplicationUpdateWithoutApplicationInput;
}
