import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutApplicationsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutApplicationsNestedInput";

@TypeGraphQL.InputType("UsersOnApplicationUpdateWithoutApplicationInput", {
  isAbstract: true
})
export class UsersOnApplicationUpdateWithoutApplicationInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutApplicationsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutApplicationsNestedInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
