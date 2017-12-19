/**
 * @jest-environment node
 */

const YelpAPI = require('./YelpAPI');

describe('YelpAPI', () => {
    it('should transform returned API Data', async () => {
        class GraphQLClientMock {
            request = jest.fn(() => {
                return Promise.resolve({
                    search: { business: ['foo', 'bar'] },
                });
            });
        }

        const yelpAPI = new YelpAPI({
            graphQLClient: GraphQLClientMock,
        });

        const results = await yelpAPI.search({
            term: 'burger',
            location: 'Kiel',
        });

        expect(yelpAPI._graphqlClient.request.mock.calls).toMatchSnapshot();
        expect(results).toMatchSnapshot();
    });
});
