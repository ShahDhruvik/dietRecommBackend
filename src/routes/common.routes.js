import express from 'express'

const router = express.Router()

router.use('/user', () => {
  console.log('hello User')
})
export default router