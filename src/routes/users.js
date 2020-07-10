const { Router } = require('express')
const userCases = require('../usesCases/users')

const ROUTER = Router()

ROUTER.post('/', async(req, res) => {
    try {
        const { body } = req
        const userCreated = await userCases.create(body)
        res.json({
            success: true,
            user: userCreated
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            data: {
                message: error.message
            }
        })
    }
})

module.exports = ROUTER