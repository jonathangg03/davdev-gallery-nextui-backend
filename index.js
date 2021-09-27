const express = require('express')
const cors = require('cors')
const router = require('./routes/image')
const { port, dbUri } = require('./config')
require('./db')(dbUri)
const app = express()

app.set('port', port || 4000)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/image', router)

app.listen(app.get('port'), () =>
  console.log(`Listen on port ${app.get('port')}`)
)
