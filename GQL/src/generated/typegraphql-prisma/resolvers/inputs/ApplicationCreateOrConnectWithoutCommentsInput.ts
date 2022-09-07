import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateWithoutCommentsInput } from "../inputs/ApplicationCreateWithoutCommentsInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateOrConnectWithoutCommentsInput", {
  isAbstract: true
})
export class ApplicationCreateOrConnectWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: ApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: ApplicationCreateWithoutCommentsInput;
}
