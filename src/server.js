import app from './index.js'
import { PORT } from './utils/config.js'
import connectDb from './utils/connetDb.js'

// Connection MongoDB
connectDb()

// Listening on port
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
})
