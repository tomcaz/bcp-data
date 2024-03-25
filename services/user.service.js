require("./mongo")
var base64 = require('base-64');
const userModel = require("../models/user.model");

const loginUser = async (req, res, next) => {
    const { username, password } = req.body
    try {
        const data = await userModel.findOne({ username, password: base64.encode(password), status: 'active' })
        if (data)
            res.json(data)
        else res.status(403).send('Invalid Username or Password')
    } catch (error) {
        console.error()
        next(error)
    }
}

const updateUser = async (req, res, next) => {
    const { username, role } = req.body
    try {
        const user = await userModel.findOneAndUpdate({ username }, { role })
        res.json(user)
    } catch (error) {
        console.error()
        next(error)
    }
}

const addUser = async (req, res, next) => {
    const { username, password, role } = req.body
    try {
        const user = new userModel({ username, password: base64.encodencode(password), role, status: 'active' })

        res.json(await user.save())
    } catch (error) {
        console.error()
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    const { username, password, role } = req.body
    try {
        res.json(await userModel.find())
    } catch (error) {
        console.error()
        next(error)
    }
}

const changeStatus = async (req, res, next) => {
    const { username } = req.body
    try {
        const userData = await userModel.findOne({ username })
        console.log(userData)
        const user = await userModel.findOneAndUpdate({ username }, { status: userData.status === 'active' ? 'disabled' : 'active' })
        res.json(user)
    } catch (error) {
        console.error()
        next(error)
    }
}


module.exports = { loginUser, updateUser, addUser, changeStatus, getUsers }