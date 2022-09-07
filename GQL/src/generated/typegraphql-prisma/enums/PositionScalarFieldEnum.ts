import * as TypeGraphQL from "type-graphql";

export enum PositionScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  open = "open",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PositionScalarFieldEnum, {
  name: "PositionScalarFieldEnum",
  description: undefined,
});
