/**
 * @jest-environment node
 */

const RestaurantAPI = require('./RestaurantAPI');

describe('Restaurant', () => {
    it('should transform returned API Data', async () => {
        class GraphQLClientMock {
            request = jest.fn(() => {
                return Promise.resolve({
                    search: { business: ['foo', 'bar'] },
                });
            });
        }

        const restaurantAPI = new RestaurantAPI({
            graphQLClient: GraphQLClientMock,
        });

        const results = await restaurantAPI.search({
            term: 'burger',
            location: 'Kiel',
        });

        expect(
            restaurantAPI._graphqlClient.request.mock.calls
        ).toMatchSnapshot();
        expect(results).toMatchSnapshot();
    });
});
