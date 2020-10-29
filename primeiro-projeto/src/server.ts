import express from 'express'

const app = express()

app.get('/', (req, res) => {
  return res.json({ message: 'hello node app' })
})

app.listen(3333, () => {
  console.log('server started ✨')
})
