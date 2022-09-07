import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutCommentsInput } from "../inputs/ApplicationCreateOrConnectWithoutCommentsInput";
import { ApplicationCreateWithoutCommentsInput } from "../inputs/ApplicationCreateWithoutCommentsInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedOneWithoutCommentsInput", {
  isAbstract: true
})
export class ApplicationCreateNestedOneWithoutCommentsInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCommentsInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutCommentsInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutCommentsInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;
}
