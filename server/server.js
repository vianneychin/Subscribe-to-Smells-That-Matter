const express = require ('express')
const app = express()

/* dependencies */
const createError = require('http-errors')
const cookieParser = require('cookie-parser')
const logger = require ('morgan')
const cors = require('cors')
const session = require('express-session')
const path = require('path')


/* Routes */
const UserRoutes = require('./routes/UserRoutes')

/* dotenv and mongod */
require('dotenv').config()
require('./db/db')


/* using dependencies - > Middleware */
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
  secret: "random string to protect information",
  resave: false,
  saveUninitialized: false
}))

/* cors */
const corsOptions = {
  /* origin is the frontend */
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}

/* Calling corsOption */
app.use(cors(corsOptions))

/* /users/register for Postman */
app.use('/users', UserRoutes)

module.exports = app