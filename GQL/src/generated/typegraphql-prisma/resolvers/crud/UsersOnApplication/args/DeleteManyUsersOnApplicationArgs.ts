import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationWhereInput } from "../../../inputs/UsersOnApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  where?: UsersOnApplicationWhereInput | undefined;
}
