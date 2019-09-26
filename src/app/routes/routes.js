const express = require('express')
const routes = express.Router()
const userController = require('../controllers/userController')

routes.get('/', (req, res) => {
    res.json({
        status: 'ok'
    })
})

routes.get('/user', userController.show)
routes.post('/user', userController.store)

module.exports = routes