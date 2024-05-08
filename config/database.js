const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/user_data";

mongoose.connect(url)
  .then(() => console.log('connection to MongoDB successful!'))
  .catch((err) => console.log(err));
  