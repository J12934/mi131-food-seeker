const {
    SearchEventEmitter,
    PersistPerformedSearches,
} = require('./PersistPerformedSearches');

const mongoose = require('../../database/connection');
const Search = require('../../database/models/Search');

beforeEach(() => {
    return Search.remove({});
});

afterAll(() => {
    return mongoose.disconnect();
});

describe('SearchEventListener', () => {
    it('save query to database on search started event', async () => {
        await PersistPerformedSearches({
            term: 'Burger',
            coordinates: { latitude: 54, longitude: 11 },
        });
        const searches = await Search.find({}).select({ __v: 0, _id: 0 });

        expect(searches).toMatchSnapshot();
    });

    it('registered to SearchEventEmitter', async () => {
        expect(SearchEventEmitter.eventNames()).toContain(
            SearchEventEmitter.types.SEARCH_STARTED
        );
    });
});
