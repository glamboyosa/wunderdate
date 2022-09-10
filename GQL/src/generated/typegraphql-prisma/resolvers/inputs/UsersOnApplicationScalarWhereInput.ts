import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("UsersOnApplicationScalarWhereInput", {
  isAbstract: true
})
export class UsersOnApplicationScalarWhereInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereInput], {
    nullable: true
  })
  AND?: UsersOnApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereInput], {
    nullable: true
  })
  OR?: UsersOnApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereInput], {
    nullable: true
  })
  NOT?: UsersOnApplicationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

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
