const { Query: { search, typeahead, restaurant } } = require('./restaurant');

jest.mock('../services/RestaurantAPI');

describe('restaurant resolvers', () => {
    describe('search()', () => {
        it('retuns expected result', async () => {
            const result = await search(null, {
                term: 'burger',
                coordinates: {
                    latitude: 54,
                    longitude: 11,
                },
            });

            expect(result).toMatchSnapshot();
        });
    });

    describe('typeahead()', () => {
        it('retuns expected result', async () => {
            const result = await typeahead(null, {
                term: 'bur',
                coordinates: {
                    latitude: 54,
                    longitude: 11,
                },
            });

            expect(result).toMatchSnapshot();
        });
    });

    describe('restaurant()', () => {
        it('retuns expected result', async () => {
            const result = await restaurant(null, { id: 'johns-burgers-kiel' });

            expect(result).toMatchSnapshot();
        });
    });
});
