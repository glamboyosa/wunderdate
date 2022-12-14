import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Comment } from "../models/Comment";
import { Position } from "../models/Position";
import { User } from "../models/User";
import { UsersOnApplication } from "../models/UsersOnApplication";
import { Status } from "../enums/Status";
import { ApplicationCount } from "../resolvers/outputs/ApplicationCount";

@TypeGraphQL.ObjectType("Application", {
  isAbstract: true
})
export class Application {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  role?: Position;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  roleId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status!: "pending" | "accepted" | "rejected";

  comments?: Comment[];

  users?: UsersOnApplication[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  User?: User[];

  @TypeGraphQL.Field(_type => ApplicationCount, {
    nullable: true
  })
  _count?: ApplicationCount | null;
}
