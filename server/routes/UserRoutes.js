const express = require('express')
const router = express.Router()
const controller = require('../controllers/User')


router.post('/register', controller.register)
router.post('/login', controller.login)


/* This is everything. in this file. */
module.exports = router