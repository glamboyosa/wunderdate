import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutApplicationNestedInput } from "../inputs/CommentUpdateManyWithoutApplicationNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutApplicationNestedInput } from "../inputs/UserUpdateManyWithoutApplicationNestedInput";
import { UsersOnApplicationUpdateManyWithoutApplicationNestedInput } from "../inputs/UsersOnApplicationUpdateManyWithoutApplicationNestedInput";

@TypeGraphQL.InputType("ApplicationUpdateWithoutRoleInput", {
  isAbstract: true
})
export class ApplicationUpdateWithoutRoleInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutApplicationNestedInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutApplicationNestedInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnApplicationUpdateManyWithoutApplicationNestedInput, {
    nullable: true
  })
  users?: UsersOnApplicationUpdateManyWithoutApplicationNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutApplicationNestedInput, {
    nullable: true
  })
  User?: UserUpdateManyWithoutApplicationNestedInput | undefined;
}
