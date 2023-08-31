const { connect, connection } = require('mongoose');

// Setting up connection to either run on local MongoDB server or cloud once deployed. Must update Config Var in heroku when deployed.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;
