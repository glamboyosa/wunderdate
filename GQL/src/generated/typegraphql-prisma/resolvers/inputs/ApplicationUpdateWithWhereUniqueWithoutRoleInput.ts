import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationUpdateWithoutRoleInput } from "../inputs/ApplicationUpdateWithoutRoleInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateWithWhereUniqueWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationUpdateWithWhereUniqueWithoutRoleInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutRoleInput, {
    nullable: false
  })
  data!: ApplicationUpdateWithoutRoleInput;
}
