import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UsersOnApplicationOrderByWithRelationInput } from "../../../inputs/UsersOnApplicationOrderByWithRelationInput";
import { UsersOnApplicationWhereInput } from "../../../inputs/UsersOnApplicationWhereInput";
import { UsersOnApplicationWhereUniqueInput } from "../../../inputs/UsersOnApplicationWhereUniqueInput";
import { UsersOnApplicationScalarFieldEnum } from "../../../../enums/UsersOnApplicationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserApplicationsArgs {
  @TypeGraphQL.Field(_type => UsersOnApplicationWhereInput, {
    nullable: true
  })
  where?: UsersOnApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UsersOnApplicationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationWhereUniqueInput, {
    nullable: true
  })
  cursor?: UsersOnApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "applicationId" | "createdAt" | "updatedAt"> | undefined;
}
