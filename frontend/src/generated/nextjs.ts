// Code generated by wunderctl. DO NOT EDIT.

import type {
	DragonsResponse,
	DragonsResponseData,
	HelloResponse,
	HelloResponseData,
	MissionsResponse,
	MissionsInput,
	MissionsResponseData,
	ProtectedCreateCommentMutationResponse,
	ProtectedCreateCommentMutationInput,
	ProtectedCreateCommentMutationResponseData,
	ProtectedGetApplicationResponse,
	ProtectedGetApplicationInput,
	ProtectedGetApplicationResponseData,
	ProtectedGetApplicationsResponse,
	ProtectedGetApplicationsResponseData,
	ProtectedGetApplicationsWithQueryResponse,
	ProtectedGetApplicationsWithQueryInput,
	ProtectedGetApplicationsWithQueryResponseData,
	ProtectedGetCommentsForApplicationResponse,
	ProtectedGetCommentsForApplicationInput,
	ProtectedGetCommentsForApplicationResponseData,
	ProtectedGetPositionsResponse,
	ProtectedGetPositionsResponseData,
	ProtectedGetPositionsWithQueryResponse,
	ProtectedGetPositionsWithQueryInput,
	ProtectedGetPositionsWithQueryResponseData,
	ProtectedUpdateApplicationMutationResponse,
	ProtectedUpdateApplicationMutationInput,
	ProtectedUpdateApplicationMutationResponseData,
} from "./models";
import { createContext } from "react";
import { hooks, WunderGraphContextProperties } from "@wundergraph/nextjs";
import { QueryArgsWithInput, SubscriptionArgs, SubscriptionArgsWithInput } from "@wundergraph/sdk/client";
export type Role = "admin" | "user";

export enum AuthProvider {
	"github" = "github",
}

export const AuthProviders = {
	github: AuthProvider.github,
};

const defaultWunderGraphContextProperties: WunderGraphContextProperties<Role> = {
	ssrCache: {},
	client: null,
	clientConfig: {
		applicationHash: "6d81dba7",
		applicationPath: "app/main",
		baseURL: "http://localhost:9991",
		sdkVersion: "0.100.0",
		authenticationEnabled: true,
	},
	user: null,
	setUser: (value) => {},
	isWindowFocused: "pristine",
	setIsWindowFocused: (value) => {},
	refetchMountedOperations: 0,
	setRefetchMountedOperations: (value) => {},
};

export const WunderGraphContext = createContext<WunderGraphContextProperties<Role>>(
	defaultWunderGraphContextProperties
);

export const withWunderGraph = hooks.withWunderGraphContextWrapper(
	WunderGraphContext,
	defaultWunderGraphContextProperties
);

export const useWunderGraph = hooks.useWunderGraph<Role, AuthProvider>(WunderGraphContext);

export const useQuery = {
	Missions: (args: QueryArgsWithInput<MissionsInput>) =>
		hooks.useQueryWithInput<MissionsInput, MissionsResponseData, Role>(WunderGraphContext, {
			operationName: "Missions",
			requiresAuthentication: false,
		})(args),
	ProtectedGetApplication: (args: QueryArgsWithInput<ProtectedGetApplicationInput>) =>
		hooks.useQueryWithInput<ProtectedGetApplicationInput, ProtectedGetApplicationResponseData, Role>(
			WunderGraphContext,
			{
				operationName: "ProtectedGetApplication",
				requiresAuthentication: true,
			}
		)(args),
	ProtectedGetApplicationsWithQuery: (args: QueryArgsWithInput<ProtectedGetApplicationsWithQueryInput>) =>
		hooks.useQueryWithInput<
			ProtectedGetApplicationsWithQueryInput,
			ProtectedGetApplicationsWithQueryResponseData,
			Role
		>(WunderGraphContext, {
			operationName: "ProtectedGetApplicationsWithQuery",
			requiresAuthentication: true,
		})(args),
	ProtectedGetCommentsForApplication: (args: QueryArgsWithInput<ProtectedGetCommentsForApplicationInput>) =>
		hooks.useQueryWithInput<
			ProtectedGetCommentsForApplicationInput,
			ProtectedGetCommentsForApplicationResponseData,
			Role
		>(WunderGraphContext, {
			operationName: "ProtectedGetCommentsForApplication",
			requiresAuthentication: true,
		})(args),
	ProtectedGetPositionsWithQuery: (args: QueryArgsWithInput<ProtectedGetPositionsWithQueryInput>) =>
		hooks.useQueryWithInput<ProtectedGetPositionsWithQueryInput, ProtectedGetPositionsWithQueryResponseData, Role>(
			WunderGraphContext,
			{
				operationName: "ProtectedGetPositionsWithQuery",
				requiresAuthentication: true,
			}
		)(args),
	Dragons: hooks.useQueryWithoutInput<DragonsResponseData, Role>(WunderGraphContext, {
		operationName: "Dragons",
		requiresAuthentication: false,
	}),
	Hello: hooks.useQueryWithoutInput<HelloResponseData, Role>(WunderGraphContext, {
		operationName: "Hello",
		requiresAuthentication: false,
	}),
	ProtectedGetApplications: hooks.useQueryWithoutInput<ProtectedGetApplicationsResponseData, Role>(WunderGraphContext, {
		operationName: "ProtectedGetApplications",
		requiresAuthentication: true,
	}),
	ProtectedGetPositions: hooks.useQueryWithoutInput<ProtectedGetPositionsResponseData, Role>(WunderGraphContext, {
		operationName: "ProtectedGetPositions",
		requiresAuthentication: true,
	}),
};

export const useMutation = {
	ProtectedCreateCommentMutation: () =>
		hooks.useMutationWithInput<ProtectedCreateCommentMutationInput, ProtectedCreateCommentMutationResponseData, Role>(
			WunderGraphContext,
			{
				operationName: "ProtectedCreateCommentMutation",
				requiresAuthentication: true,
			}
		),
	ProtectedUpdateApplicationMutation: () =>
		hooks.useMutationWithInput<
			ProtectedUpdateApplicationMutationInput,
			ProtectedUpdateApplicationMutationResponseData,
			Role
		>(WunderGraphContext, {
			operationName: "ProtectedUpdateApplicationMutation",
			requiresAuthentication: true,
		}),
};

export const useSubscription = {};

export const useLiveQuery = {
	ProtectedGetCommentsForApplication: (args: SubscriptionArgsWithInput<ProtectedGetCommentsForApplicationInput>) =>
		hooks.useSubscriptionWithInput<
			ProtectedGetCommentsForApplicationInput,
			ProtectedGetCommentsForApplicationResponseData,
			Role
		>(WunderGraphContext, {
			operationName: "ProtectedGetCommentsForApplication",
			requiresAuthentication: true,
			isLiveQuery: true,
		})(args),
};
