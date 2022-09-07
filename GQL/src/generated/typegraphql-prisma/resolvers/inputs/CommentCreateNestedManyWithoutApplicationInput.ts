import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyApplicationInputEnvelope } from "../inputs/CommentCreateManyApplicationInputEnvelope";
import { CommentCreateOrConnectWithoutApplicationInput } from "../inputs/CommentCreateOrConnectWithoutApplicationInput";
import { CommentCreateWithoutApplicationInput } from "../inputs/CommentCreateWithoutApplicationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentCreateNestedManyWithoutApplicationInput", {
  isAbstract: true
})
export class CommentCreateNestedManyWithoutApplicationInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: CommentCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
