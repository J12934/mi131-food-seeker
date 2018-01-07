const SearchEventEmitter = require('../emitter/SearchEventEmitter');
const SearchModel = require('../../database/models/Search');

const PersistPerformedSearches = async ({
    term,
    coordinates: { latitude, longitude },
}) => {
    await SearchModel.create({
        term,
        location: {
            type: 'Point',
            coordinates: [longitude, latitude],
        },
    });
};

SearchEventEmitter.on(
    SearchEventEmitter.types.SEARCH_STARTED,
    PersistPerformedSearches
);

module.exports = { SearchEventEmitter, PersistPerformedSearches };
