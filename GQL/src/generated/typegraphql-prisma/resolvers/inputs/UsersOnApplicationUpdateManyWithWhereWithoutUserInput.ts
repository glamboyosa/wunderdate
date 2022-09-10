import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationScalarWhereInput } from "../inputs/UsersOnApplicationScalarWhereInput";
import { UsersOnApplicationUpdateManyMutationInput } from "../inputs/UsersOnApplicationUpdateManyMutationInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationScalarWhereInput, {
    nullable: false
  })
  where!: UsersOnApplicationScalarWhereInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersOnApplicationUpdateManyMutationInput;
}
