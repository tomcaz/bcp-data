const express = require("express")
const { getPaints, updatePaint, getOrders, saveNewOrder, updateOrder } = require("../services/paint.service")
const app = express.Router()

app.get('/', getPaints)
app.put('/', updatePaint)
app.get('/orders', getOrders)
app.post('/orders', saveNewOrder)
app.put('/orders', updateOrder)

module.exports = app