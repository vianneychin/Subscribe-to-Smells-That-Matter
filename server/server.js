const express = require('express')
const app = express()

const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const path = require('path')

const UserRoutes = require('./routes/UserRoutes')

require('dotenv').config()
require('./db/db')

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(
  session({
    secret: 'random string to protect information',
    resave: false,
    saveUninitialized: false
  })
)

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/users', UserRoutes)

module.exports = app
