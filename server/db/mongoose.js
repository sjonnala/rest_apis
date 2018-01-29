var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let db = {
    localhost: process.env.MONGODB_URI,
    mlab: 'mongodb://root:Test123@ds117888.mlab.com:17888/node-rest-apis'
};
console.log('MONGODB_URI: ', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
