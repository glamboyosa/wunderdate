import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutApplicationsInput } from "../inputs/UserUpdateWithoutApplicationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateWithWhereUniqueWithoutApplicationsInput", {
  isAbstract: true
})
export class UserUpdateWithWhereUniqueWithoutApplicationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutApplicationsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutApplicationsInput;
}
