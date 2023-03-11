import express from 'express'
import cors from 'cors'
import CommonRoutes from './routes/common.routes.js'

const app = express()

app.use(
  cors({
    origin: '*',
  }),
)

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/app', CommonRoutes)

export default app
