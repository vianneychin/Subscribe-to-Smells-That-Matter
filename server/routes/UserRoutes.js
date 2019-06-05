const express = require('express')
const router = express.Router()
const controller = require('../controllers/User')


router.post('/register', controller.new)


/* This is everything. in this file. */
module.exports = router