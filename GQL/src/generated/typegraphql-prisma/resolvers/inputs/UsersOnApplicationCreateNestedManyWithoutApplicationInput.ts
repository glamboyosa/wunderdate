import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationCreateManyApplicationInputEnvelope } from "../inputs/UsersOnApplicationCreateManyApplicationInputEnvelope";
import { UsersOnApplicationCreateOrConnectWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateOrConnectWithoutApplicationInput";
import { UsersOnApplicationCreateWithoutApplicationInput } from "../inputs/UsersOnApplicationCreateWithoutApplicationInput";
import { UsersOnApplicationWhereUniqueInput } from "../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationCreateNestedManyWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationCreateNestedManyWithoutApplicationInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: UsersOnApplicationCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: UsersOnApplicationCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: UsersOnApplicationCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereUniqueInput], {
    nullable: true
  })
  connect?: UsersOnApplicationWhereUniqueInput[] | undefined;
}
