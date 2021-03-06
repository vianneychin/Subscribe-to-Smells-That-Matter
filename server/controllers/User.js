const User = require('../models/UserModel')

module.exports = {
  register: async (req, res) => {
    if (req.body.password === req.body.verifyPassword) {
      try {
        const newUser = await User.create(req.body)
        res.json({ newUser })
      } catch (error) {
        res.json({ error })
      }
    }
  },
  login: async (req, res) => {
    console.log(req.body)
    try {
      const registeredUser = await User.findOne({ email: req.body.email })
      if (registeredUser) {
        if (registeredUser.compareWithHashPassword(req.body.password)) {
          res.json({ user: registeredUser })
        }
      } else {
        res.json({
          message: 'Email or password do not match.'
        })
      }
    } catch (error) {
      res.json({ error })
    }
  }
}
