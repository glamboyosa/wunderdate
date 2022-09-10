import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationUpdateInput } from "../../../inputs/UsersOnApplicationUpdateInput";
import { UsersOnApplicationWhereUniqueInput } from "../../../inputs/UsersOnApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateInput, {
    nullable: false
  })
  data!: UsersOnApplicationUpdateInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: false
  })
  where!: UsersOnApplicationWhereUniqueInput;
}
