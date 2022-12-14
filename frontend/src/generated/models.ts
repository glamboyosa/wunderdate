// Code generated by wunderctl. DO NOT EDIT.

export interface MissionsInput {
	find?: spacex_MissionsFind;
}

export interface ProtectedCreateCommentMutationInput {
	applicationId: number;
	commentInput: TGQL_CommentCreateInput;
}

export interface ProtectedGetApplicationInput {
	id: number;
}

export interface ProtectedGetApplicationsWithQueryInput {
	roleId: number;
}

export interface ProtectedGetCommentsForApplicationInput {
	applicationId: number;
}

export interface ProtectedGetPositionsWithQueryInput {
	open: boolean;
}

export interface ProtectedUpdateApplicationMutationInput {
	updateApplicationId: number;
	open: boolean;
	status: string;
}

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface HelloResponse {
	data?: HelloResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface MissionsResponse {
	data?: MissionsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedCreateCommentMutationResponse {
	data?: ProtectedCreateCommentMutationResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetApplicationResponse {
	data?: ProtectedGetApplicationResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetApplicationsResponse {
	data?: ProtectedGetApplicationsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetApplicationsWithQueryResponse {
	data?: ProtectedGetApplicationsWithQueryResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetCommentsForApplicationResponse {
	data?: ProtectedGetCommentsForApplicationResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetPositionsResponse {
	data?: ProtectedGetPositionsResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedGetPositionsWithQueryResponse {
	data?: ProtectedGetPositionsWithQueryResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface ProtectedUpdateApplicationMutationResponse {
	data?: ProtectedUpdateApplicationMutationResponseData;
	errors?: ReadonlyArray<GraphQLError>;
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
	}[];
}

export interface HelloResponseData {
	gql_hello?: string;
}

export interface MissionsResponseData {
	spacex_missions?: {
		id?: string;
		name?: string;
		manufacturers?: string[];
	}[];
}

export interface ProtectedCreateCommentMutationResponseData {
	createCommentMutation: {
		id: number;
		message: string;
		createdAt: string;
		from: string;
	};
}

export interface ProtectedGetApplicationResponseData {
	getApplication?: {
		id?: number;
		message?: string;
		status?: string;
		users?: {
			userId?: number;
			user?: {
				name?: string;
				email?: string;
			};
		}[];
		role?: {
			description?: string;
			id?: number;
			name?: string;
		};
	};
}

export interface ProtectedGetApplicationsResponseData {
	getApplications?: {
		id?: number;
		message?: string;
		status?: string;
		users?: {
			userId?: number;
			user?: {
				name?: string;
			};
		}[];
		role?: {
			id?: number;
			name?: string;
		};
	}[];
}

export interface ProtectedGetApplicationsWithQueryResponseData {
	getApplicationsWithQuery?: {
		id?: number;
		message?: string;
		status?: string;
		users?: {
			userId?: number;
			user?: {
				name?: string;
			};
		}[];
		role?: {
			description?: string;
			id?: number;
			name?: string;
		};
	}[];
}

export interface ProtectedGetCommentsForApplicationResponseData {
	getCommentsForApplication: {
		id: number;
		message: string;
		createdAt: string;
		from: string;
	}[];
}

export interface ProtectedGetPositionsResponseData {
	getPositions?: {
		id?: number;
		open?: boolean;
		name?: string;
		description?: string;
		application?: {
			message?: string;
			role?: {
				name?: string;
				description?: string;
			};
		}[];
	}[];
}

export interface ProtectedGetPositionsWithQueryResponseData {
	getPositionsWithQuery?: {
		id?: number;
		open?: boolean;
		name?: string;
		description?: string;
		application?: {
			message?: string;
			role?: {
				name?: string;
				description?: string;
			};
		}[];
	}[];
}

export interface ProtectedUpdateApplicationMutationResponseData {
	updateApplicationMutation?: {
		status?: string;
	};
}

export interface spacex_MissionsFind {
	id?: string;
	manufacturer?: string;
	name?: string;
	payload_id?: string;
}

export interface TGQL_CommentCreateInput {
	message: string;
	from: string;
	application: TGQL_ApplicationCreateNestedOneWithoutCommentsInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_ApplicationCreateNestedOneWithoutCommentsInput {
	create?: TGQL_ApplicationCreateWithoutCommentsInput;
	connectOrCreate?: TGQL_ApplicationCreateOrConnectWithoutCommentsInput;
	connect?: TGQL_ApplicationWhereUniqueInput;
}

export interface TGQL_ApplicationCreateWithoutCommentsInput {
	role?: TGQL_PositionCreateNestedOneWithoutApplicationInput;
	message?: string;
	status?: "pending" | "accepted" | "rejected";
	users?: TGQL_UsersOnApplicationCreateNestedManyWithoutApplicationInput;
	createdAt?: string;
	updatedAt?: string;
	User?: TGQL_UserCreateNestedManyWithoutApplicationInput;
}

export interface TGQL_PositionCreateNestedOneWithoutApplicationInput {
	create?: TGQL_PositionCreateWithoutApplicationInput;
	connectOrCreate?: TGQL_PositionCreateOrConnectWithoutApplicationInput;
	connect?: TGQL_PositionWhereUniqueInput;
}

export interface TGQL_PositionCreateWithoutApplicationInput {
	name?: string;
	description?: string;
	open?: boolean;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_PositionCreateOrConnectWithoutApplicationInput {
	where?: TGQL_PositionWhereUniqueInput;
	create?: TGQL_PositionCreateWithoutApplicationInput;
}

export interface TGQL_PositionWhereUniqueInput {
	id?: number;
}

export interface TGQL_UsersOnApplicationCreateNestedManyWithoutApplicationInput {
	create?: TGQL_UsersOnApplicationCreateWithoutApplicationInput[];
	connectOrCreate?: TGQL_UsersOnApplicationCreateOrConnectWithoutApplicationInput[];
	createMany?: TGQL_UsersOnApplicationCreateManyApplicationInputEnvelope;
	connect?: TGQL_UsersOnApplicationWhereUniqueInput[];
}

export interface TGQL_UsersOnApplicationCreateWithoutApplicationInput {
	user: TGQL_UserCreateNestedOneWithoutApplicationsInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_UserCreateNestedOneWithoutApplicationsInput {
	create?: TGQL_UserCreateWithoutApplicationsInput;
	connectOrCreate?: TGQL_UserCreateOrConnectWithoutApplicationsInput;
	connect?: TGQL_UserWhereUniqueInput;
}

export interface TGQL_UserCreateWithoutApplicationsInput {
	email?: string;
	name?: string;
	role?: TGQL_UserCreateroleInput;
	createdAt?: string;
	updatedAt?: string;
	Application?: TGQL_ApplicationCreateNestedOneWithoutUserInput;
}

export interface TGQL_UserCreateroleInput {
	set?: string[];
}

export interface TGQL_ApplicationCreateNestedOneWithoutUserInput {
	create?: TGQL_ApplicationCreateWithoutUserInput;
	connectOrCreate?: TGQL_ApplicationCreateOrConnectWithoutUserInput;
	connect?: TGQL_ApplicationWhereUniqueInput;
}

export interface TGQL_ApplicationCreateWithoutUserInput {
	role?: TGQL_PositionCreateNestedOneWithoutApplicationInput;
	message?: string;
	status?: "pending" | "accepted" | "rejected";
	comments?: TGQL_CommentCreateNestedManyWithoutApplicationInput;
	users?: TGQL_UsersOnApplicationCreateNestedManyWithoutApplicationInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_CommentCreateNestedManyWithoutApplicationInput {
	create?: TGQL_CommentCreateWithoutApplicationInput[];
	connectOrCreate?: TGQL_CommentCreateOrConnectWithoutApplicationInput[];
	createMany?: TGQL_CommentCreateManyApplicationInputEnvelope;
	connect?: TGQL_CommentWhereUniqueInput[];
}

export interface TGQL_CommentCreateWithoutApplicationInput {
	message: string;
	from: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_CommentCreateOrConnectWithoutApplicationInput {
	where: TGQL_CommentWhereUniqueInput;
	create: TGQL_CommentCreateWithoutApplicationInput;
}

export interface TGQL_CommentWhereUniqueInput {
	id?: number;
}

export interface TGQL_CommentCreateManyApplicationInputEnvelope {
	data?: TGQL_CommentCreateManyApplicationInput[];
	skipDuplicates?: boolean;
}

export interface TGQL_CommentCreateManyApplicationInput {
	id?: number;
	message: string;
	from: string;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_ApplicationCreateOrConnectWithoutUserInput {
	where?: TGQL_ApplicationWhereUniqueInput;
	create?: TGQL_ApplicationCreateWithoutUserInput;
}

export interface TGQL_ApplicationWhereUniqueInput {
	id?: number;
	roleId?: number;
}

export interface TGQL_UserCreateOrConnectWithoutApplicationsInput {
	where?: TGQL_UserWhereUniqueInput;
	create?: TGQL_UserCreateWithoutApplicationsInput;
}

export interface TGQL_UserWhereUniqueInput {
	id?: number;
	email?: string;
}

export interface TGQL_UsersOnApplicationCreateOrConnectWithoutApplicationInput {
	where: TGQL_UsersOnApplicationWhereUniqueInput;
	create: TGQL_UsersOnApplicationCreateWithoutApplicationInput;
}

export interface TGQL_UsersOnApplicationWhereUniqueInput {
	userId_applicationId?: TGQL_UsersOnApplicationUserIdApplicationIdCompoundUniqueInput;
}

export interface TGQL_UsersOnApplicationUserIdApplicationIdCompoundUniqueInput {
	userId?: number;
	applicationId?: number;
}

export interface TGQL_UsersOnApplicationCreateManyApplicationInputEnvelope {
	data?: TGQL_UsersOnApplicationCreateManyApplicationInput[];
	skipDuplicates?: boolean;
}

export interface TGQL_UsersOnApplicationCreateManyApplicationInput {
	userId: number;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_UserCreateNestedManyWithoutApplicationInput {
	create?: TGQL_UserCreateWithoutApplicationInput[];
	connectOrCreate?: TGQL_UserCreateOrConnectWithoutApplicationInput[];
	createMany?: TGQL_UserCreateManyApplicationInputEnvelope;
	connect?: TGQL_UserWhereUniqueInput[];
}

export interface TGQL_UserCreateWithoutApplicationInput {
	email: string;
	name: string;
	role?: TGQL_UserCreateroleInput;
	applications?: TGQL_UsersOnApplicationCreateNestedManyWithoutUserInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_UsersOnApplicationCreateNestedManyWithoutUserInput {
	create?: TGQL_UsersOnApplicationCreateWithoutUserInput[];
	connectOrCreate?: TGQL_UsersOnApplicationCreateOrConnectWithoutUserInput[];
	createMany?: TGQL_UsersOnApplicationCreateManyUserInputEnvelope;
	connect?: TGQL_UsersOnApplicationWhereUniqueInput[];
}

export interface TGQL_UsersOnApplicationCreateWithoutUserInput {
	application: TGQL_ApplicationCreateNestedOneWithoutUsersInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_ApplicationCreateNestedOneWithoutUsersInput {
	create?: TGQL_ApplicationCreateWithoutUsersInput;
	connectOrCreate?: TGQL_ApplicationCreateOrConnectWithoutUsersInput;
	connect?: TGQL_ApplicationWhereUniqueInput;
}

export interface TGQL_ApplicationCreateWithoutUsersInput {
	role?: TGQL_PositionCreateNestedOneWithoutApplicationInput;
	message?: string;
	status?: "pending" | "accepted" | "rejected";
	comments?: TGQL_CommentCreateNestedManyWithoutApplicationInput;
	createdAt?: string;
	updatedAt?: string;
	User?: TGQL_UserCreateNestedManyWithoutApplicationInput;
}

export interface TGQL_ApplicationCreateOrConnectWithoutUsersInput {
	where?: TGQL_ApplicationWhereUniqueInput;
	create?: TGQL_ApplicationCreateWithoutUsersInput;
}

export interface TGQL_UsersOnApplicationCreateOrConnectWithoutUserInput {
	where: TGQL_UsersOnApplicationWhereUniqueInput;
	create: TGQL_UsersOnApplicationCreateWithoutUserInput;
}

export interface TGQL_UsersOnApplicationCreateManyUserInputEnvelope {
	data?: TGQL_UsersOnApplicationCreateManyUserInput[];
	skipDuplicates?: boolean;
}

export interface TGQL_UsersOnApplicationCreateManyUserInput {
	applicationId: number;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_UserCreateOrConnectWithoutApplicationInput {
	where: TGQL_UserWhereUniqueInput;
	create: TGQL_UserCreateWithoutApplicationInput;
}

export interface TGQL_UserCreateManyApplicationInputEnvelope {
	data?: TGQL_UserCreateManyApplicationInput[];
	skipDuplicates?: boolean;
}

export interface TGQL_UserCreateManyApplicationInput {
	id?: number;
	email: string;
	name: string;
	role?: TGQL_UserCreateroleInput;
	createdAt?: string;
	updatedAt?: string;
}

export interface TGQL_ApplicationCreateOrConnectWithoutCommentsInput {
	where?: TGQL_ApplicationWhereUniqueInput;
	create?: TGQL_ApplicationCreateWithoutCommentsInput;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
	message: string;
	path?: ReadonlyArray<string | number>;
}
