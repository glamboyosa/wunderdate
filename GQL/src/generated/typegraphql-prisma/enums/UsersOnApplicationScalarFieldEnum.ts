import * as TypeGraphQL from "type-graphql";

export enum UsersOnApplicationScalarFieldEnum {
  userId = "userId",
  applicationId = "applicationId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UsersOnApplicationScalarFieldEnum, {
  name: "UsersOnApplicationScalarFieldEnum",
  description: undefined,
});
