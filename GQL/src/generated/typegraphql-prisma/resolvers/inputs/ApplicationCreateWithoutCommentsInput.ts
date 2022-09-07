import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PositionCreateNestedOneWithoutApplicationInput } from "../inputs/PositionCreateNestedOneWithoutApplicationInput";
import { UserCreateNestedManyWithoutApplicationsInput } from "../inputs/UserCreateNestedManyWithoutApplicationsInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("ApplicationCreateWithoutCommentsInput", {
  isAbstract: true
})
export class ApplicationCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PositionCreateNestedOneWithoutApplicationInput, {
    nullable: false
  })
  role!: PositionCreateNestedOneWithoutApplicationInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  status?: "pending" | "accepted" | "rejected" | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutApplicationsInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutApplicationsInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
