const mongoose = require('mongoose');
const keys = require('./config/keys');
const User = require('./models/User');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

async function main() {
  const users = await User.find({}).exec();

  console.log(users);
}

main().then(process.exit);
