import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateWithoutApplicationInput";
import { UsersOnApplicationUpdateWithoutApplicationInput } from "../inputs/UsersOnApplicationUpdateWithoutApplicationInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationUpsertWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: UsersOnApplicationUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: UsersOnApplicationCreateWithoutApplicationInput;
}
