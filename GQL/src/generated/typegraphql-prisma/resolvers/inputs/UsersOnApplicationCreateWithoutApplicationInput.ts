import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutApplicationsInput } from "../inputs/UserCreateNestedOneWithoutApplicationsInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutApplicationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutApplicationsInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
