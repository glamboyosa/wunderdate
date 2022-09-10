import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("UsersOnApplicationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UsersOnApplicationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsersOnApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsersOnApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersOnApplicationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsersOnApplicationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  applicationId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
