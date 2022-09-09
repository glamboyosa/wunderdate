import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { makeSchema } from 'nexus'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import * as types from './utils/types'
;(async () => {
  const prisma = new PrismaClient()
  const pathToDotEnv = path.resolve('../.env')
  dotenv.config({ path: pathToDotEnv })
  const PORT = process.env.NEXUS_PORT || 4001
  const app = express()
  app.use(cors())
  const apolloServer = new ApolloServer({
    context: () => ({ prisma }),
    schema: makeSchema({
      sourceTypes: {
        modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
      },
      contextType: {
        module: path.join(__dirname, 'context.ts'),
        export: 'Context',
      },
      outputs: {
        typegen: path.join(
          __dirname,
          '../node_modules/@types/nexus-typegen/index.d.ts',
        ),
        schema: path.join(__dirname, './api.graphql'),
      },
      shouldExitAfterGenerateArtifacts: false,
      types,
    }),
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(PORT, () => {
    console.log(
      `🚀 Nexus GraphQL service live at http://localhost:${PORT}/graphql`,
    )
  })
  process.on('exit', async () => {
    await prisma.$disconnect()
    console.log('Successfully disconnected')
  })
  process.on('SIGINT', async () => {
    await prisma.$disconnect()
    console.log('Successfully disconnected')
  })
  process.on('SIGTERM', async () => {
    await prisma.$disconnect()
    console.log('Successfully disconnected')
  })
})()
