import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Application: crudResolvers.ApplicationCrudResolver,
  Position: crudResolvers.PositionCrudResolver,
  Comment: crudResolvers.CommentCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Application: {
    aggregateApplication: actionResolvers.AggregateApplicationResolver,
    createManyApplication: actionResolvers.CreateManyApplicationResolver,
    createOneApplication: actionResolvers.CreateOneApplicationResolver,
    deleteManyApplication: actionResolvers.DeleteManyApplicationResolver,
    deleteOneApplication: actionResolvers.DeleteOneApplicationResolver,
    findFirstApplication: actionResolvers.FindFirstApplicationResolver,
    applications: actionResolvers.FindManyApplicationResolver,
    application: actionResolvers.FindUniqueApplicationResolver,
    groupByApplication: actionResolvers.GroupByApplicationResolver,
    updateManyApplication: actionResolvers.UpdateManyApplicationResolver,
    updateOneApplication: actionResolvers.UpdateOneApplicationResolver,
    upsertOneApplication: actionResolvers.UpsertOneApplicationResolver
  },
  Position: {
    aggregatePosition: actionResolvers.AggregatePositionResolver,
    createManyPosition: actionResolvers.CreateManyPositionResolver,
    createOnePosition: actionResolvers.CreateOnePositionResolver,
    deleteManyPosition: actionResolvers.DeleteManyPositionResolver,
    deleteOnePosition: actionResolvers.DeleteOnePositionResolver,
    findFirstPosition: actionResolvers.FindFirstPositionResolver,
    positions: actionResolvers.FindManyPositionResolver,
    position: actionResolvers.FindUniquePositionResolver,
    groupByPosition: actionResolvers.GroupByPositionResolver,
    updateManyPosition: actionResolvers.UpdateManyPositionResolver,
    updateOnePosition: actionResolvers.UpdateOnePositionResolver,
    upsertOnePosition: actionResolvers.UpsertOnePositionResolver
  },
  Comment: {
    aggregateComment: actionResolvers.AggregateCommentResolver,
    createManyComment: actionResolvers.CreateManyCommentResolver,
    createOneComment: actionResolvers.CreateOneCommentResolver,
    deleteManyComment: actionResolvers.DeleteManyCommentResolver,
    deleteOneComment: actionResolvers.DeleteOneCommentResolver,
    findFirstComment: actionResolvers.FindFirstCommentResolver,
    comments: actionResolvers.FindManyCommentResolver,
    comment: actionResolvers.FindUniqueCommentResolver,
    groupByComment: actionResolvers.GroupByCommentResolver,
    updateManyComment: actionResolvers.UpdateManyCommentResolver,
    updateOneComment: actionResolvers.UpdateOneCommentResolver,
    upsertOneComment: actionResolvers.UpsertOneCommentResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "users", "user", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Application: ["aggregateApplication", "createManyApplication", "createOneApplication", "deleteManyApplication", "deleteOneApplication", "findFirstApplication", "applications", "application", "groupByApplication", "updateManyApplication", "updateOneApplication", "upsertOneApplication"],
  Position: ["aggregatePosition", "createManyPosition", "createOnePosition", "deleteManyPosition", "deleteOnePosition", "findFirstPosition", "positions", "position", "groupByPosition", "updateManyPosition", "updateOnePosition", "upsertOnePosition"],
  Comment: ["aggregateComment", "createManyComment", "createOneComment", "deleteManyComment", "deleteOneComment", "findFirstComment", "comments", "comment", "groupByComment", "updateManyComment", "updateOneComment", "upsertOneComment"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateApplicationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyApplicationArgs: ["data", "skipDuplicates"],
  CreateOneApplicationArgs: ["data"],
  DeleteManyApplicationArgs: ["where"],
  DeleteOneApplicationArgs: ["where"],
  FindFirstApplicationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyApplicationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueApplicationArgs: ["where"],
  GroupByApplicationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyApplicationArgs: ["data", "where"],
  UpdateOneApplicationArgs: ["data", "where"],
  UpsertOneApplicationArgs: ["where", "create", "update"],
  AggregatePositionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPositionArgs: ["data", "skipDuplicates"],
  CreateOnePositionArgs: ["data"],
  DeleteManyPositionArgs: ["where"],
  DeleteOnePositionArgs: ["where"],
  FindFirstPositionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPositionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePositionArgs: ["where"],
  GroupByPositionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPositionArgs: ["data", "where"],
  UpdateOnePositionArgs: ["data", "where"],
  UpsertOnePositionArgs: ["where", "create", "update"],
  AggregateCommentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCommentArgs: ["data", "skipDuplicates"],
  CreateOneCommentArgs: ["data"],
  DeleteManyCommentArgs: ["where"],
  DeleteOneCommentArgs: ["where"],
  FindFirstCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCommentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCommentArgs: ["where"],
  GroupByCommentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCommentArgs: ["data", "where"],
  UpdateOneCommentArgs: ["data", "where"],
  UpsertOneCommentArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Application: relationResolvers.ApplicationRelationsResolver,
  Position: relationResolvers.PositionRelationsResolver,
  Comment: relationResolvers.CommentRelationsResolver
};
const relationResolversInfo = {
  User: ["applications"],
  Application: ["role", "comments", "users"],
  Position: ["application"],
  Comment: ["application"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "name", "role", "createdAt", "updatedAt"],
  Application: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  Position: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  Comment: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "name", "role", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateApplication: ["_count", "_avg", "_sum", "_min", "_max"],
  ApplicationGroupBy: ["id", "roleId", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePosition: ["_count", "_avg", "_sum", "_min", "_max"],
  PositionGroupBy: ["id", "name", "description", "open", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateComment: ["_count", "_avg", "_sum", "_min", "_max"],
  CommentGroupBy: ["id", "message", "from", "applicationId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["applications"],
  UserCountAggregate: ["id", "email", "name", "role", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "email", "name", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "email", "name", "createdAt", "updatedAt"],
  ApplicationCount: ["comments", "users"],
  ApplicationCountAggregate: ["id", "roleId", "message", "status", "createdAt", "updatedAt", "_all"],
  ApplicationAvgAggregate: ["id", "roleId"],
  ApplicationSumAggregate: ["id", "roleId"],
  ApplicationMinAggregate: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  ApplicationMaxAggregate: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  PositionCount: ["application"],
  PositionCountAggregate: ["id", "name", "description", "open", "createdAt", "updatedAt", "_all"],
  PositionAvgAggregate: ["id"],
  PositionSumAggregate: ["id"],
  PositionMinAggregate: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  PositionMaxAggregate: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  CommentCountAggregate: ["id", "message", "from", "applicationId", "createdAt", "updatedAt", "_all"],
  CommentAvgAggregate: ["id", "applicationId"],
  CommentSumAggregate: ["id", "applicationId"],
  CommentMinAggregate: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  CommentMaxAggregate: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "role", "applications", "createdAt", "updatedAt"],
  UserOrderByWithRelationInput: ["id", "email", "name", "role", "applications", "createdAt", "updatedAt"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "name", "role", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "name", "role", "createdAt", "updatedAt"],
  ApplicationWhereInput: ["AND", "OR", "NOT", "id", "role", "roleId", "message", "status", "comments", "users", "createdAt", "updatedAt"],
  ApplicationOrderByWithRelationInput: ["id", "role", "roleId", "message", "status", "comments", "users", "createdAt", "updatedAt"],
  ApplicationWhereUniqueInput: ["id", "roleId"],
  ApplicationOrderByWithAggregationInput: ["id", "roleId", "message", "status", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ApplicationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "roleId", "message", "status", "createdAt", "updatedAt"],
  PositionWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "open", "application", "createdAt", "updatedAt"],
  PositionOrderByWithRelationInput: ["id", "name", "description", "open", "application", "createdAt", "updatedAt"],
  PositionWhereUniqueInput: ["id"],
  PositionOrderByWithAggregationInput: ["id", "name", "description", "open", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PositionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "open", "createdAt", "updatedAt"],
  CommentWhereInput: ["AND", "OR", "NOT", "id", "message", "from", "application", "applicationId", "createdAt", "updatedAt"],
  CommentOrderByWithRelationInput: ["id", "message", "from", "application", "applicationId", "createdAt", "updatedAt"],
  CommentWhereUniqueInput: ["id"],
  CommentOrderByWithAggregationInput: ["id", "message", "from", "applicationId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  CommentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  UserCreateInput: ["email", "name", "role", "applications", "createdAt", "updatedAt"],
  UserUpdateInput: ["email", "name", "role", "applications", "createdAt", "updatedAt"],
  UserCreateManyInput: ["id", "email", "name", "role", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["email", "name", "role", "createdAt", "updatedAt"],
  ApplicationCreateInput: ["role", "message", "status", "comments", "users", "createdAt", "updatedAt"],
  ApplicationUpdateInput: ["role", "message", "status", "comments", "users", "createdAt", "updatedAt"],
  ApplicationCreateManyInput: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  ApplicationUpdateManyMutationInput: ["message", "status", "createdAt", "updatedAt"],
  PositionCreateInput: ["name", "description", "open", "application", "createdAt", "updatedAt"],
  PositionUpdateInput: ["name", "description", "open", "application", "createdAt", "updatedAt"],
  PositionCreateManyInput: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  PositionUpdateManyMutationInput: ["name", "description", "open", "createdAt", "updatedAt"],
  CommentCreateInput: ["message", "from", "application", "createdAt", "updatedAt"],
  CommentUpdateInput: ["message", "from", "application", "createdAt", "updatedAt"],
  CommentCreateManyInput: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  CommentUpdateManyMutationInput: ["message", "from", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  ApplicationListRelationFilter: ["every", "some", "none"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ApplicationOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "name", "role", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "email", "name", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "email", "name", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PositionRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumStatusFilter: ["equals", "in", "notIn", "not"],
  CommentListRelationFilter: ["every", "some", "none"],
  UserListRelationFilter: ["every", "some", "none"],
  CommentOrderByRelationAggregateInput: ["_count"],
  UserOrderByRelationAggregateInput: ["_count"],
  ApplicationCountOrderByAggregateInput: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  ApplicationAvgOrderByAggregateInput: ["id", "roleId"],
  ApplicationMaxOrderByAggregateInput: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  ApplicationMinOrderByAggregateInput: ["id", "roleId", "message", "status", "createdAt", "updatedAt"],
  ApplicationSumOrderByAggregateInput: ["id", "roleId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  PositionCountOrderByAggregateInput: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  PositionAvgOrderByAggregateInput: ["id"],
  PositionMaxOrderByAggregateInput: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  PositionMinOrderByAggregateInput: ["id", "name", "description", "open", "createdAt", "updatedAt"],
  PositionSumOrderByAggregateInput: ["id"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ApplicationRelationFilter: ["is", "isNot"],
  CommentCountOrderByAggregateInput: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  CommentAvgOrderByAggregateInput: ["id", "applicationId"],
  CommentMaxOrderByAggregateInput: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  CommentMinOrderByAggregateInput: ["id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  CommentSumOrderByAggregateInput: ["id", "applicationId"],
  UserCreateroleInput: ["set"],
  ApplicationCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  UserUpdateroleInput: ["set", "push"],
  ApplicationUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PositionCreateNestedOneWithoutApplicationInput: ["create", "connectOrCreate", "connect"],
  CommentCreateNestedManyWithoutApplicationInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedManyWithoutApplicationsInput: ["create", "connectOrCreate", "connect"],
  PositionUpdateOneRequiredWithoutApplicationNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  EnumStatusFieldUpdateOperationsInput: ["set"],
  CommentUpdateManyWithoutApplicationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateManyWithoutApplicationsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApplicationCreateNestedManyWithoutRoleInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  ApplicationUpdateManyWithoutRoleNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ApplicationCreateNestedOneWithoutCommentsInput: ["create", "connectOrCreate", "connect"],
  ApplicationUpdateOneRequiredWithoutCommentsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumStatusFilter: ["equals", "in", "notIn", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ApplicationCreateWithoutUsersInput: ["role", "message", "status", "comments", "createdAt", "updatedAt"],
  ApplicationCreateOrConnectWithoutUsersInput: ["where", "create"],
  ApplicationUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  ApplicationUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  ApplicationUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  ApplicationScalarWhereInput: ["AND", "OR", "NOT", "id", "roleId", "message", "status", "createdAt", "updatedAt"],
  PositionCreateWithoutApplicationInput: ["name", "description", "open", "createdAt", "updatedAt"],
  PositionCreateOrConnectWithoutApplicationInput: ["where", "create"],
  CommentCreateWithoutApplicationInput: ["message", "from", "createdAt", "updatedAt"],
  CommentCreateOrConnectWithoutApplicationInput: ["where", "create"],
  CommentCreateManyApplicationInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutApplicationsInput: ["email", "name", "role", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutApplicationsInput: ["where", "create"],
  PositionUpsertWithoutApplicationInput: ["update", "create"],
  PositionUpdateWithoutApplicationInput: ["name", "description", "open", "createdAt", "updatedAt"],
  CommentUpsertWithWhereUniqueWithoutApplicationInput: ["where", "update", "create"],
  CommentUpdateWithWhereUniqueWithoutApplicationInput: ["where", "data"],
  CommentUpdateManyWithWhereWithoutApplicationInput: ["where", "data"],
  CommentScalarWhereInput: ["AND", "OR", "NOT", "id", "message", "from", "applicationId", "createdAt", "updatedAt"],
  UserUpsertWithWhereUniqueWithoutApplicationsInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutApplicationsInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutApplicationsInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "name", "role", "createdAt", "updatedAt"],
  ApplicationCreateWithoutRoleInput: ["message", "status", "comments", "users", "createdAt", "updatedAt"],
  ApplicationCreateOrConnectWithoutRoleInput: ["where", "create"],
  ApplicationCreateManyRoleInputEnvelope: ["data", "skipDuplicates"],
  ApplicationUpsertWithWhereUniqueWithoutRoleInput: ["where", "update", "create"],
  ApplicationUpdateWithWhereUniqueWithoutRoleInput: ["where", "data"],
  ApplicationUpdateManyWithWhereWithoutRoleInput: ["where", "data"],
  ApplicationCreateWithoutCommentsInput: ["role", "message", "status", "users", "createdAt", "updatedAt"],
  ApplicationCreateOrConnectWithoutCommentsInput: ["where", "create"],
  ApplicationUpsertWithoutCommentsInput: ["update", "create"],
  ApplicationUpdateWithoutCommentsInput: ["role", "message", "status", "users", "createdAt", "updatedAt"],
  ApplicationUpdateWithoutUsersInput: ["role", "message", "status", "comments", "createdAt", "updatedAt"],
  CommentCreateManyApplicationInput: ["id", "message", "from", "createdAt", "updatedAt"],
  CommentUpdateWithoutApplicationInput: ["message", "from", "createdAt", "updatedAt"],
  UserUpdateWithoutApplicationsInput: ["email", "name", "role", "createdAt", "updatedAt"],
  ApplicationCreateManyRoleInput: ["id", "message", "status", "createdAt", "updatedAt"],
  ApplicationUpdateWithoutRoleInput: ["message", "status", "comments", "users", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

