import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApplicationOrderByWithRelationInput } from "../../../inputs/ApplicationOrderByWithRelationInput";
import { ApplicationWhereInput } from "../../../inputs/ApplicationWhereInput";
import { ApplicationWhereUniqueInput } from "../../../inputs/ApplicationWhereUniqueInput";
import { ApplicationScalarFieldEnum } from "../../../../enums/ApplicationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApplicationArgs {
  @TypeGraphQL.Field(_type => ApplicationWhereInput, {
    nullable: true
  })
  where?: ApplicationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApplicationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ApplicationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ApplicationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "roleId" | "message" | "status" | "createdAt" | "updatedAt"> | undefined;
}
