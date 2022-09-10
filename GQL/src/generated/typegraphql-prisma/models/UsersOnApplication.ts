import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Application } from "../models/Application";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("UsersOnApplication", {
  isAbstract: true
})
export class UsersOnApplication {
  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  application?: Application;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  applicationId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
