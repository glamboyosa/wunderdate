import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumStatusFieldUpdateOperationsInput } from "../inputs/EnumStatusFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PositionUpdateManyWithoutApplicationNestedInput } from "../inputs/PositionUpdateManyWithoutApplicationNestedInput";
import { UserUpdateManyWithoutApplicationsNestedInput } from "../inputs/UserUpdateManyWithoutApplicationsNestedInput";

@TypeGraphQL.InputType("ApplicationUpdateWithoutCommentsInput", {
  isAbstract: true
})
export class ApplicationUpdateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => PositionUpdateManyWithoutApplicationNestedInput, {
    nullable: true
  })
  role?: PositionUpdateManyWithoutApplicationNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  message?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumStatusFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumStatusFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutApplicationsNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutApplicationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
