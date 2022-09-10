import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationCreateInput } from "../../../inputs/UsersOnApplicationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationCreateInput, {
    nullable: false
  })
  data!: UsersOnApplicationCreateInput;
}
