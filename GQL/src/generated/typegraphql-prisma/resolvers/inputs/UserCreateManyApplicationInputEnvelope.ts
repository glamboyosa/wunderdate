import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyApplicationInput } from "../inputs/UserCreateManyApplicationInput";

@TypeGraphQL.InputType("UserCreateManyApplicationInputEnvelope", {
  isAbstract: true
})
export class UserCreateManyApplicationInputEnvelope {
  @TypeGraphQL.Field(_type => [UserCreateManyApplicationInput], {
    nullable: false
  })
  data!: UserCreateManyApplicationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
