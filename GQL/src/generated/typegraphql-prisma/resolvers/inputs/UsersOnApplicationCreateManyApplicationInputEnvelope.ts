import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyApplicationInput } from "../inputs/UsersOnApplicationCreateManyApplicationInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateManyApplicationInputEnvelope", {
  isAbstract: true
})
export class UsersOnApplicationCreateManyApplicationInputEnvelope {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateManyApplicationInput], {
    nullable: false
  })
  data!: UsersOnApplicationCreateManyApplicationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
