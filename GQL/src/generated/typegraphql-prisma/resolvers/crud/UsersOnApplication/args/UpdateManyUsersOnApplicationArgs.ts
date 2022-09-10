import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationUpdateManyMutationInput } from "../../../inputs/UsersOnApplicationUpdateManyMutationInput";
import { UsersOnApplicationWhereInput } from "../../../inputs/UsersOnApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateManyMutationInput, {
    nullable: false
  })
  data!: UsersOnApplicationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  where?: UsersOnApplicationWhereInput | undefined;
}
