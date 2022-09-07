import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateManyApplicationInput } from "../inputs/PositionCreateManyApplicationInput";

@TypeGraphQL.InputType("PositionCreateManyApplicationInputEnvelope", {
  isAbstract: true
})
export class PositionCreateManyApplicationInputEnvelope {
  @TypeGraphQL.Field(_type => [PositionCreateManyApplicationInput], {
    nullable: false
  })
  data!: PositionCreateManyApplicationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
