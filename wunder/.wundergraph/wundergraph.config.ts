import {
  Application,
  configurePublishWunderGraphAPI,
  configureWunderGraphApplication,
  cors,
  introspect,
  templates,
  authProviders,
} from '@wundergraph/sdk'
import dotenv from 'dotenv'
import path from 'path'
import server from './wundergraph.server'
import operations from './wundergraph.operations'
import { NextJsTemplate } from '@wundergraph/nextjs/dist/template'
const pathToDotEnv = path.resolve('../../.env')
dotenv.config({ path: pathToDotEnv })
const spaceX = introspect.graphql({
  apiNamespace: 'spacex',
  url: 'https://api.spacex.land/graphql/',
})

const TGQLEndpoint = introspect.graphql({
  apiNamespace: 'TGQL',
  url: 'http://localhost:8000/graphql',
})
const nexusEndpoint = introspect.graphql({
  apiNamespace: 'Nexus',
  url: 'http://localhost:4000/graphql',
})

const myApplication = new Application({
  name: 'app',
  apis: [spaceX, TGQLEndpoint, nexusEndpoint],
})

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  application: myApplication,
  server,
  operations,
  codeGenerators: [
    {
      templates: [
        // use all the typescript react templates to generate a client
        ...templates.typescript.all,
        templates.typescript.operations,
        templates.typescript.linkBuilder,
      ],
      // create-react-app expects all code to be inside /src
      // path: "../frontend/src/generated",
    },
    {
      templates: [new NextJsTemplate()],
      path: '../../frontend/src/generated',
    },
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === 'production'
        ? [
            // change this before deploying to production to the actual domain where you're deploying your app
            'http://localhost:3000',
          ]
        : ['http://localhost:3000'],
  },
  dotGraphQLConfig: {
    hasDotWunderGraphDirectory: false,
  },
  authentication: {
    cookieBased: {
      providers: [
        authProviders.github({
          id: 'github',
          clientId: process.env.GITHUB_CLIENT_ID!,
          clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
      ],
      authorizedRedirectUris: ['http://localhost:3000/login'],
    },
  },
  authorization: {
    roles: ['admin', 'user'],
  },
  security: {
    enableGraphQLEndpoint: process.env.NODE_ENV !== 'production',
  },
})
