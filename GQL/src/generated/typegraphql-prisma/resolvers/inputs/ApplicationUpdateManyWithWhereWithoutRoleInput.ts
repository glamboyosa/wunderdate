import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationScalarWhereInput } from "../inputs/ApplicationScalarWhereInput";
import { ApplicationUpdateManyMutationInput } from "../inputs/ApplicationUpdateManyMutationInput";

@TypeGraphQL.InputType("ApplicationUpdateManyWithWhereWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationUpdateManyWithWhereWithoutRoleInput {
  @TypeGraphQL.Field(_type => ApplicationScalarWhereInput, {
    nullable: false
  })
  where!: ApplicationScalarWhereInput;

  @TypeGraphQL.Field(_type => ApplicationUpdateManyMutationInput, {
    nullable: false
  })
  data!: ApplicationUpdateManyMutationInput;
}
