import * as TypeGraphQL from "type-graphql";

export enum Status {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
