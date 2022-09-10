import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationRelationFilter } from "../inputs/ApplicationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UsersOnApplicationWhereInput", {
  isAbstract: true
})
export class UsersOnApplicationWhereInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereInput], {
    nullable: true
  })
  AND?: UsersOnApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereInput], {
    nullable: true
  })
  OR?: UsersOnApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationWhereInput], {
    nullable: true
  })
  NOT?: UsersOnApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ApplicationRelationFilter, {
    nullable: true
  })
  application?: ApplicationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  applicationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
