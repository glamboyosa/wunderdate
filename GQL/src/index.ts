import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { context } from './utils/types'
import { HelloResolver } from './resolvers/helloResolver'
import path from 'path'
;(async () => {
  const pathToDotEnv = path.resolve('../.env')
  dotenv.config({ path: pathToDotEnv })

  const app = express()
  app.use(cors())

  const apolloServer = new ApolloServer({
    introspection: true,
    schema: await buildSchema({
      resolvers: [HelloResolver],
    }),
    context: ({ req, res }: context) => ({ req, res }),
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, cors: false })
  const port = process.env.GQL_PORT || 7000
  app.listen(port, () => {
    console.log(`started on ${port}`)
  })
})()
