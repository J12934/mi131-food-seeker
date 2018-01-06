const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/food_seeker', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
