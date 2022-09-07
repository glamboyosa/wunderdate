import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApplicationCreateInput } from "../../../inputs/ApplicationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApplicationArgs {
  @TypeGraphQL.Field(_type => ApplicationCreateInput, {
    nullable: false
  })
  data!: ApplicationCreateInput;
}
