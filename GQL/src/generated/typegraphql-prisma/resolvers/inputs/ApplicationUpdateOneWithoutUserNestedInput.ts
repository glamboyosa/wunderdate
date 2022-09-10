import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutUserInput } from "../inputs/ApplicationCreateOrConnectWithoutUserInput";
import { ApplicationCreateWithoutUserInput } from "../inputs/ApplicationCreateWithoutUserInput";
import { ApplicationUpdateWithoutUserInput } from "../inputs/ApplicationUpdateWithoutUserInput";
import { ApplicationUpsertWithoutUserInput } from "../inputs/ApplicationUpsertWithoutUserInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationUpdateOneWithoutUserNestedInput", {
  isAbstract: true
})
export class ApplicationUpdateOneWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutUserInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutUserInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutUserInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutUserInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutUserInput | undefined;
}
