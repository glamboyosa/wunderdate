import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateNestedManyWithoutApplicationInput } from "../inputs/CommentCreateNestedManyWithoutApplicationInput";
import { UserCreateNestedManyWithoutApplicationsInput } from "../inputs/UserCreateNestedManyWithoutApplicationsInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("ApplicationCreateWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationCreateWithoutRoleInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | undefined;

  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  status?: "pending" | "accepted" | "rejected" | undefined;

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutApplicationInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutApplicationInput | undefined;

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
