import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyUserInputEnvelope } from "../inputs/UsersOnApplicationCreateManyUserInputEnvelope";
import { UsersOnApplicationCreateOrConnectWithoutUserInput } from "../inputs/UsersOnApplicationCreateOrConnectWithoutUserInput";
import { UsersOnApplicationCreateWithoutUserInput } from "../inputs/UsersOnApplicationCreateWithoutUserInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateWithoutUserInput], {
    nullable: true
  })
  create?: UsersOnApplicationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnApplicationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UsersOnApplicationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnApplicationWhereUniqueInput[] | undefined;
}
