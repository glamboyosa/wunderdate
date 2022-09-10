import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutUserInput } from "../inputs/ApplicationCreateWithoutUserInput";
import { ApplicationUpdateWithoutUserInput } from "../inputs/ApplicationUpdateWithoutUserInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutUserInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutUserInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutUserInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutUserInput;
}
