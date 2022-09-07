import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyApplicationInput } from "../inputs/CommentCreateManyApplicationInput";

@TypeGraphQL.InputType("CommentCreateManyApplicationInputEnvelope", {
  isAbstract: true
})
export class CommentCreateManyApplicationInputEnvelope {
  @TypeGraphQL.Field(_type => [CommentCreateManyApplicationInput], {
    nullable: false
  })
  data!: CommentCreateManyApplicationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
