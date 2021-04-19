const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: String,
  password: {
    type: String,
    required: true
  }
})

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;