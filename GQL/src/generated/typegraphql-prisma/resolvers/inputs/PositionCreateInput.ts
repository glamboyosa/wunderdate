import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateNestedOneWithoutRoleInput } from "../inputs/ApplicationCreateNestedOneWithoutRoleInput";

@TypeGraphQL.InputType("PositionCreateInput", {
  isAbstract: true
})
export class PositionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  open!: boolean;

  @TypeGraphQL.Field(_type => ApplicationCreateNestedOneWithoutRoleInput, {
    nullable: true
  })
  application?: ApplicationCreateNestedOneWithoutRoleInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
