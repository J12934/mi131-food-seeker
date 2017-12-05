const mongoose = require('./connection');

const Cat = mongoose.model('Cat', { name: String });

module.exports = Cat;
