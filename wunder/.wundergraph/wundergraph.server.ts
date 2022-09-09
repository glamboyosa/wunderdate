import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { configureWunderGraphServer } from '@wundergraph/sdk'
import type { HooksConfig } from './generated/wundergraph.hooks'
import type { InternalClient } from './generated/wundergraph.internal.client'
import { PrismaClient } from '@prisma/client'
export default configureWunderGraphServer<HooksConfig, InternalClient>(() => ({
  hooks: {
    queries: {},
    mutations: {},
    authentication: {
      mutatingPostAuthentication: async (user) => {
        const prisma = new PrismaClient()
        const email = user.user?.email
        if (email) {
          const prismaUser = await prisma.user.upsert({
            where: { email: email },
            update: {
              name: user.user!.name,
              email: email,
            },
            create: {
              name: user.user!.name as string,
              email,
              applications: undefined,
              role: ['admin'],
            },
          })
          return {
            status: 'ok',
            user: {
              ...prismaUser,
              roles: ['admin'],
            },
          }
        }
        return {
          status: 'ok',
          user: {
            ...user,
            roles: ['admin'],
          },
        }
      },
    },
  },
  graphqlServers: [
    {
      serverName: 'gql',
      apiNamespace: 'gql',
      schema: new GraphQLSchema({
        query: new GraphQLObjectType({
          name: 'RootQueryType',
          fields: {
            hello: {
              type: GraphQLString,
              resolve() {
                return 'world'
              },
            },
          },
        }),
      }),
    },
  ],
}))
