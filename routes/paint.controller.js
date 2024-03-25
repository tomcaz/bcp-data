const express = require("express")
const { getPaints } = require("../services/paint.service")
const app = express.Router()

app.get('/', getPaints)
app.put('/', updatePaints)
app.get('/orders', getOrders)
app.put('/orders', updateOrders)
app.post('/orders', updateOrders)

module.exports = app