import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutApplicationInput } from "../inputs/CommentCreateWithoutApplicationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateOrConnectWithoutApplicationInput", {
  isAbstract: true
})
export class CommentCreateOrConnectWithoutApplicationInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutApplicationInput, {
    nullable: false
  })
  create!: CommentCreateWithoutApplicationInput;
}
