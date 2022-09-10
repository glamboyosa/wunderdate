import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationWhereUniqueInput } from "../../../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;
}
