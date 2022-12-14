import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutUserInput } from "../inputs/ApplicationCreateNestedOneWithoutUserInput";
import { UserCreateroleInput } from "../inputs/UserCreateroleInput";

@TypeGraphQL.InputType("UserCreateWithoutApplicationsInput", {
  isAbstract: true
})
export class UserCreateWithoutApplicationsInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutUserInput, {
    nullable: true
  })
  Application?: ApplicationCreateNestedOneWithoutUserInput | undefined;
}
