import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";
import { UsersOnApplicationCreateNestedManyWithoutUserInput } from "../inputs/UsersOnApplicationCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutApplicationInput", {
  isAbstract: true
})
export class UserCreateWithoutApplicationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateroleInput, {
    nullable: true
  })
  role?: UserCreateroleInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  applications?: UsersOnApplicationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
