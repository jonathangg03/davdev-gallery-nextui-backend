const express = require('express')
const cors = require('cors')
const db = require('./db')
const router = require('./routes/image')
const { port } = require('./config')

const app = express()

app.set('port', port || 4000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/image', router)

app.listen(app.get('port'), () =>
  console.log(`Listen on port ${app.get('port')}`)
)
