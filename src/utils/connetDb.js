import { connect } from 'mongoose'
import { MONGO_URL } from './config.js'

const connectDb = async () => {
  await connect(MONGO_URL)
}

export default connectDb
