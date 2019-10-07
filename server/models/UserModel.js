const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  subscribed: { type: Boolean }
})

UserSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.methods.compareWithHashPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this.hashPassword(this.password)
  }
  next()
})

const User = mongoose.model('User', UserSchema)
module.exports = User
