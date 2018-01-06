const mongoose = require('../connection');
const validateCoords = require('../validators/coordinate');

const SearchSchema = new mongoose.Schema({
    term: String,
    location: {
        type: { type: String, default: 'point' },
        coordinates: {
            type: [Number],
            validate: validateCoords,
        },
    },
});

const Search = mongoose.model('Search', SearchSchema);

Search.validateCoords = validateCoords;

module.exports = Search;
