import * as TypeGraphQL from "type-graphql";

export enum ApplicationScalarFieldEnum {
  id = "id",
  roleId = "roleId",
  message = "message",
  status = "status",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ApplicationScalarFieldEnum, {
  name: "ApplicationScalarFieldEnum",
  description: undefined,
});
