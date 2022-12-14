import {
  configureWunderGraphOperations,
  QueryConfiguration,
  MutationConfiguration,
  SubscriptionConfiguration,
} from '@wundergraph/sdk'
import type { OperationsConfiguration } from './generated/wundergraph.operations'
const enableAuthAndLiveQuerying = <
  Configs extends
    | QueryConfiguration
    | MutationConfiguration
    | SubscriptionConfiguration,
>(
  config: Configs,
): Configs => {
  return {
    ...config,
    liveQuery: {
      enable: true,
      pollingIntervalSeconds: 2,
    },
    authentication: {
      required: true,
    },
  }
}
const enableAuth = <
  Configs extends
    | QueryConfiguration
    | MutationConfiguration
    | SubscriptionConfiguration,
>(
  config: Configs,
): Configs => {
  return {
    ...config,
    authentication: {
      required: true,
    },
  }
}

export default configureWunderGraphOperations<OperationsConfiguration>({
  operations: {
    defaultConfig: {
      authentication: {
        required: false,
      },
    },
    queries: (config) => ({
      ...config,
      caching: {
        enable: false,
        staleWhileRevalidate: 60,
        maxAge: 60,
        public: true,
      },
      liveQuery: {
        enable: false,
        pollingIntervalSeconds: 0,
      },
    }),
    mutations: (config) => ({
      ...config,
    }),
    subscriptions: (config) => ({
      ...config,
    }),
    custom: {
      ProtectedGetApplications: enableAuth,
      ProtectedGetApplication: enableAuth,
      ProtectedGetPositions: enableAuth,
      ProtectedGetApplicationsWithQuery: enableAuth,
      ProtectedGetPositionsWithQuery: enableAuth,
      ProtectedUpdateApplicationMutation: enableAuth,
      ProtectedCreateCommentMutation: enableAuth,
      ProtectedGetCommentsForApplication: enableAuthAndLiveQuerying,
    },
  },
})
