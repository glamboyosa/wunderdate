import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutApplicationInput } from "../inputs/CommentCreateWithoutApplicationInput";
import { CommentUpdateWithoutApplicationInput } from "../inputs/CommentUpdateWithoutApplicationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpsertWithWhereUniqueWithoutApplicationInput", {
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutApplicationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutApplicationInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutApplicationInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: CommentCreateWithoutApplicationInput;
}
