import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationCreateInput } from "../../../inputs/UsersOnApplicationCreateInput";
import { UsersOnApplicationUpdateInput } from "../../../inputs/UsersOnApplicationUpdateInput";
import { UsersOnApplicationWhereUniqueInput } from "../../../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationCreateInput, {
    nullable: false
  })
  create!: UsersOnApplicationCreateInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateInput, {
    nullable: false
  })
  update!: UsersOnApplicationUpdateInput;
}
