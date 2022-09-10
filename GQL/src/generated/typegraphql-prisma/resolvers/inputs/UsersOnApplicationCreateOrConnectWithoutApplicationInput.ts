import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateWithoutApplicationInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: UsersOnApplicationCreateWithoutApplicationInput;
}
