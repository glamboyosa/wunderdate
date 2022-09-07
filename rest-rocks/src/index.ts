import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

const pathToDotEnv = path.resolve('../.env')
dotenv.config({ path: pathToDotEnv })

const app = express()
const PORT = process.env.EXPRESS_PORT || 4001

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, () => console.log('listening on port', PORT))
