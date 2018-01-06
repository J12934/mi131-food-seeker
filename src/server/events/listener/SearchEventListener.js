const SearchEventEmitter = require('../emitter/SearchEventEmitter');
const SearchModel = require('../../database/models/Search');

SearchEventEmitter.on(
    SearchEventEmitter.types.SEARCH_STARTED,
    async ({ term, coordinates: { latitude, longitude } }) => {
        await SearchModel.create({
            term,
            location: {
                type: 'Point',
                coordinates: [longitude, latitude],
            },
        });
    }
);
