const { Query: { searches } } = require('./searches');
const mongoose = require('../database/connection');
const Search = require('../database/models/Search');

beforeAll(async () => {
    // This ensures that the db is properly initialised before runing the tests
    await Search.find({});
});

beforeEach(() => {
    return Search.remove({});
});

afterAll(() => {
    return mongoose.disconnect();
});

describe('searches', () => {
    it('should return an empty array if the database is empty', async () => {
        const result = await searches(null, {
            coordinates: {
                latitude: 54,
                longitude: 11,
            },
        });

        expect(result).toEqual([]);
    });

    it('should return nearby searches', async () => {
        await Search.create({
            term: 'Foo',
            location: {
                type: 'Point',
                coordinates: [11, 54],
            },
        });

        const result = await searches(null, {
            coordinates: {
                latitude: 54,
                longitude: 11,
            },
        });

        expect(result).toEqual(['Foo']);
    });

    it('should exclude faraway searches', async () => {
        await Search.create({
            term: 'Foo',
            location: {
                type: 'Point',
                coordinates: [9, 53],
            },
        });

        const result = await searches(null, {
            coordinates: {
                latitude: 54,
                longitude: 11,
            },
        });

        expect(result).toEqual([]);
    });
});
