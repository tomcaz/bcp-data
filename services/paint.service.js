const paintModel = require("../models/paint.model")
const orderModel = require("../models/order.model")
require("../services/mongo")
const uuid = require("uuid")

const getPaints = async (req, res, next) => {
    try {
        const data = await paintModel.find();
        res.json(data)
    } catch (error) {
        console.error()
        next(error)
    }
}
const updatePaint = async (req, res, next) => {
    const { paint, lane } = req.body
    try {
        const data = await paintModel.findByIdAndUpdate(paint._id, { lane })
        res.send(data)
    } catch (error) {
        console.error()
        next(error)
    }
}
const getOrders = async (req, res, next) => {
    try {
        const data = await orderModel.find();
        res.json(data)
    } catch (error) {
        console.error()
        next(error)
    }
}
const saveNewOrder = async (req, res, next) => {
    const {
        address, createdBy, createdAt, paint, amount, status } = req.body
    try {
        const data = new orderModel({
            id: uuid.v4(), address, createdBy, createdAt, paint, amount, status
        });
        const result = await data.save()
        res.json(result)
    } catch (error) {
        console.error()
        next(error)
    }
}
const updateOrder = async (req, res, next) => {
    const { orderId, status } = req.body
    try {
        const data = await orderModel.findOneAndUpdate({ id: orderId }, { status });
        if (status === 'pick up') {
            const paint = await paintModel.findById(data.paint)
            await paintModel.findByIdAndUpdate(data.paint, { paintQty: paint.paintQty + data.amount })
        }
        res.json(data)
    } catch (error) {
        console.error()
        next(error)
    }
}

module.exports = { getPaints, updatePaint, getOrders, saveNewOrder, updateOrder }