import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutApplicationInput } from "../inputs/UserCreateWithoutApplicationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: UserCreateWithoutApplicationInput;
}
