const express = require("express")
const { getPaints, updatePaint, getOrders, saveNewOrder, updateOrder } = require("../services/paint.service")
const app = express.Router()

app.get('/', getPaints)
app.put('/', updatePaint)
app.get('/orders', getOrders)
app.put('/orders', saveNewOrder)
app.post('/orders', updateOrder)

module.exports = app