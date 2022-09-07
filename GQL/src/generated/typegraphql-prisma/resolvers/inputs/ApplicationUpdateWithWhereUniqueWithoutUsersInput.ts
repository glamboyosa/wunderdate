import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateWithoutUsersInput } from "../inputs/ApplicationUpdateWithoutUsersInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class ApplicationUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: ApplicationUpdateWithoutUsersInput;
}
