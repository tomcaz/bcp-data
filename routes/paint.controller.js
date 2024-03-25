const express = require("express")
const { getPaints, updatePaint, updatePaintAmount, getOrders, saveNewOrder, updateOrder } = require("../services/paint.service")
const app = express.Router()

app.get('/', getPaints)
app.put('/', updatePaint)
app.put('/amount', updatePaintAmount)
app.get('/orders', getOrders)
app.post('/orders', saveNewOrder)
app.put('/orders', updateOrder)

module.exports = app