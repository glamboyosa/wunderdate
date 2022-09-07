import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyApplicationInputEnvelope } from "../inputs/CommentCreateManyApplicationInputEnvelope";
import { CommentCreateOrConnectWithoutApplicationInput } from "../inputs/CommentCreateOrConnectWithoutApplicationInput";
import { CommentCreateWithoutApplicationInput } from "../inputs/CommentCreateWithoutApplicationInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutApplicationInput } from "../inputs/CommentUpdateManyWithWhereWithoutApplicationInput";
import { CommentUpdateWithWhereUniqueWithoutApplicationInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutApplicationInput";
import { CommentUpsertWithWhereUniqueWithoutApplicationInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutApplicationInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType("CommentUpdateManyWithoutApplicationNestedInput", {
  isAbstract: true
})
export class CommentUpdateManyWithoutApplicationNestedInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: CommentCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutApplicationInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutApplicationInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
