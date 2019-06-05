const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  subscribed: { type: Boolean }
})

const User = mongoose.model('User', UserSchema)
module.exports = User