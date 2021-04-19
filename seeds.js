const mongoose = require('mongoose');
const Users = require('./models/users');

mongoose.connect('mongodb://localhost:27017/corkboard', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('MONGO CONNECTION OPEN')
})
.catch(err => {
  console.log("OH NO CONNECTION ERROR")
  console.log(err)
})

const u = new Users({
  username: 'g-ram84',
  email: 'chalmers.graeme@gmail.com',
  password: '1234'
})

u.save().then(u => {
  console.log(u)
})
.catch(e => {
  console.log(e)
})
