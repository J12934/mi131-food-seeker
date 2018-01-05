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

    search({ term, location }) {
        const query = `
            query Search($term: String!, $location: String!) {
                search(term: $term, location: $location) {
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
            .request(query, { term, location })
            .then(data => {
                return data.search.business;
            });
    }

    typeahead() {}
};
