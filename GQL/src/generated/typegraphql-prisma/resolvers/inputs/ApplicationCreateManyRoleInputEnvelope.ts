import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateManyRoleInput } from "../inputs/ApplicationCreateManyRoleInput";

@TypeGraphQL.InputType("ApplicationCreateManyRoleInputEnvelope", {
  isAbstract: true
})
export class ApplicationCreateManyRoleInputEnvelope {
  @TypeGraphQL.Field(_type => [ApplicationCreateManyRoleInput], {
    nullable: false
  })
  data!: ApplicationCreateManyRoleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
