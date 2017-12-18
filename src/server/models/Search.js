const mongoose = require('./connection');

const Search = mongoose.model('Search', {
    term: String,
    location: String,
});

module.exports = Search;
