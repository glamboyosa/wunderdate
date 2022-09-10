import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutUsersInput } from "../inputs/ApplicationCreateNestedOneWithoutUsersInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutUsersInput, {
    nullable: false
  })
  application!: ApplicationCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
