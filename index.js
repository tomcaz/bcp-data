const express = require('express')
const app = express()
const port = 3001
var bodyParser = require('body-parser')

var cors = require('cors')
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/paints', require('./routes/paint.controller'))
app.use('/user', require('./routes/user.controller'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})