const express = require("express")
const { loginUser, updateUser, addUser, changeStatus, getUsers } = require("../services/user.service")
const app = express.Router()

app.post('/', loginUser)
app.get('/', getUsers)
app.patch('/', updateUser)
app.put('/', addUser)
app.patch('/status', changeStatus)

module.exports = app