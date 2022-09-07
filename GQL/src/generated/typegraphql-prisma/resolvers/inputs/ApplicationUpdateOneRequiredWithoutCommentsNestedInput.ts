import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutCommentsInput } from "../inputs/ApplicationCreateOrConnectWithoutCommentsInput";
import { ApplicationCreateWithoutCommentsInput } from "../inputs/ApplicationCreateWithoutCommentsInput";
import { ApplicationUpdateWithoutCommentsInput } from "../inputs/ApplicationUpdateWithoutCommentsInput";
import { ApplicationUpsertWithoutCommentsInput } from "../inputs/ApplicationUpsertWithoutCommentsInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneRequiredWithoutCommentsNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateOneRequiredWithoutCommentsNestedInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutCommentsInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutCommentsInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutCommentsInput | undefined;
}
