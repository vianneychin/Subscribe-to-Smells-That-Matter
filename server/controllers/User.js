const User = require('../models/UserModel')

module.exports = {

  new: async (req, res) => {
    try {
      const newUser = await User.create(req.body)
      res.json({ newUser })
    } catch (error) {
      res.json({ error })
    }
  }

}