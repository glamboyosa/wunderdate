import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyUserInput } from "../inputs/UsersOnApplicationCreateManyUserInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UsersOnApplicationCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateManyUserInput], {
    nullable: false
  })
  data!: UsersOnApplicationCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
