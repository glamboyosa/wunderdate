import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  email = "email",
  name = "name",
  role = "role",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  applicationId = "applicationId"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
