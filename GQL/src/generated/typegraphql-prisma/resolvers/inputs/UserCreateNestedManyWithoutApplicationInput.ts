import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyApplicationInputEnvelope } from "../inputs/UserCreateManyApplicationInputEnvelope";
import { UserCreateOrConnectWithoutApplicationInput } from "../inputs/UserCreateOrConnectWithoutApplicationInput";
import { UserCreateWithoutApplicationInput } from "../inputs/UserCreateWithoutApplicationInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutApplicationInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutApplicationInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutApplicationInput], {
    nullable: true
  })
  create?: UserCreateWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutApplicationInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutApplicationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyApplicationInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyApplicationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
