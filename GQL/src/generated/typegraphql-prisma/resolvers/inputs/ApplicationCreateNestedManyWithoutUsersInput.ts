import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutUsersInput } from "../inputs/ApplicationCreateOrConnectWithoutUsersInput";
import { ApplicationCreateWithoutUsersInput } from "../inputs/ApplicationCreateWithoutUsersInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType("ApplicationCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class ApplicationCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [ApplicationCreateWithoutUsersInput], {
    nullable: true
  })
  create?: ApplicationCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput[] | undefined;
}
