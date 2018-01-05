const Axios = require('axios');
const { GraphQLClient } = require('graphql-request');

module.exports = class RestaurantAPI {
    constructor({ axios = Axios, graphQLClient = GraphQLClient } = {}) {
        this._httpClient = axios.create({
            baseURL: 'https://api.yelp.com/v3/',
            headers: {
                Authorization: 'Bearer ' + process.env.YELP_API_TOKEN,
            },
        });

        this._graphqlClient = new graphQLClient(
            'https://api.yelp.com/v3/graphql',
            {
                headers: {
                    Authorization: 'Bearer ' + process.env.YELP_API_TOKEN,
                },
            }
        );
    }

    search({ term, coordinates: { latitude, longitude } }) {
        const query = `
            query Search($term: String!, $latitude: Float!, $longitude: Float! ) {
                search(term: $term, latitude: $latitude, longitude: $longitude) {
                    total
                    business {
                        id
                        name
                        rating
                        coordinates {
                            latitude
                            longitude
                        }
                    }
                }
            }`;

        return this._graphqlClient
            .request(query, { term, latitude, longitude })
            .then(data => {
                return data.search.business;
            })
            .catch(err => {
                console.warn('Yelp API Search Request failed.', err);

                throw new Error(
                    'Cannot perform search. Please try again later'
                );
            });
    }

    typeahead({ term: text, coordinates: { latitude, longitude } }) {
        return this._httpClient
            .get('/autocomplete', { params: { text, latitude, longitude } })
            .then(({ data }) => {
                console.log(data);
                return data.categories.map(({ title }) => title);
            })
            .catch(err => {
                console.warn('Yelp API Autocomplete Request failed.', err);

                return [];
            });
    }
};
