import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumStatusFilter } from "../inputs/EnumStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PositionRelationFilter } from "../inputs/PositionRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UsersOnApplicationListRelationFilter } from "../inputs/UsersOnApplicationListRelationFilter";

@TypeGraphQL.InputType("ApplicationWhereInput", {
  isAbstract: true
})
export class ApplicationWhereInput {
  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  AND?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  OR?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApplicationWhereInput], {
    nullable: true
  })
  NOT?: ApplicationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PositionRelationFilter, {
    nullable: true
  })
  role?: PositionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  roleId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  message?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFilter, {
    nullable: true
  })
  status?: EnumStatusFilter | undefined;

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationListRelationFilter, {
    nullable: true
  })
  users?: UsersOnApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  User?: UserListRelationFilter | undefined;
}
