import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutCommentsInput } from "../inputs/ApplicationCreateWithoutCommentsInput";
import { ApplicationUpdateWithoutCommentsInput } from "../inputs/ApplicationUpdateWithoutCommentsInput";

@TypeGraphQL.InputType("ApplicationUpsertWithoutCommentsInput", {
  isAbstract: true
})
export class ApplicationUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: ApplicationUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutCommentsInput;
}
