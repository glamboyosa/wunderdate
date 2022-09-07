import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { context } from './utils/types'
import { HelloResolver } from './resolvers/helloResolver'
import { CommentsResolver } from './resolvers/commentsResolver'
import path from 'path'
;(async () => {
  const prisma = new PrismaClient()
  const pathToDotEnv = path.resolve('../.env')
  dotenv.config({ path: pathToDotEnv })

  const app = express()
  app.use(cors())

  const apolloServer = new ApolloServer({
    introspection: true,
    schema: await buildSchema({
      resolvers: [HelloResolver, CommentsResolver],
    }),
    context: ({ req, res }: context) => ({ req, res, prisma }),
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, cors: false })
  const port = process.env.GQL_PORT || 7000
  app.listen(port, () => {
    console.log(`started on ${port}`)
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
