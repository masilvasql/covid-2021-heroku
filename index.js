const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 4203

app.use(cors())

app.use(express.static('build'))

app.listen(port)