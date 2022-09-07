import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateWithoutApplicationInput } from "../inputs/CommentUpdateWithoutApplicationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class CommentUpdateWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutApplicationInput, {
    nullable: false
  })
  data!: CommentUpdateWithoutApplicationInput;
}
