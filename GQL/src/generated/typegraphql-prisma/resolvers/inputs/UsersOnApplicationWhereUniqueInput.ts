import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationUserIdApplicationIdCompoundUniqueInput } from "../inputs/UsersOnApplicationUserIdApplicationIdCompoundUniqueInput";

@TypeGraphQL.InputType("UsersOnApplicationWhereUniqueInput", {
  isAbstract: true
})
export class UsersOnApplicationWhereUniqueInput {
  @TypeGraphQL.Field(_type => UsersOnApplicationUserIdApplicationIdCompoundUniqueInput, {
    nullable: true
  })
  userId_applicationId?: UsersOnApplicationUserIdApplicationIdCompoundUniqueInput | undefined;
}
