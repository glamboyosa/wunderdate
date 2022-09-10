import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutApplicationInput } from "../inputs/UserUpdateWithoutApplicationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutApplicationInput, {
    nullable: false
  })
  data!: UserUpdateWithoutApplicationInput;
}
