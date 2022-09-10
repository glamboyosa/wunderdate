import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationCreateManyInput } from "../../../inputs/UsersOnApplicationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUsersOnApplicationArgs {
  @TypeGraphQL.Field(_type => [UsersOnApplicationCreateManyInput], {
    nullable: false
  })
  data!: UsersOnApplicationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
