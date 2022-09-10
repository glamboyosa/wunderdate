import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersOnApplicationWhereInput } from "../inputs/UsersOnApplicationWhereInput";

@TypeGraphQL.InputType("UsersOnApplicationListRelationFilter", {
  isAbstract: true
})
export class UsersOnApplicationListRelationFilter {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  every?: UsersOnApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  some?: UsersOnApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  none?: UsersOnApplicationWhereInput | undefined;
}
