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

    search({ term, coordinates: { latitude, longitude }, categories = [] }) {
        const categoriesString = categories.join(',');

        const query = `
            query Search($term: String!, $latitude: Float!, $longitude: Float!, $categories: String! ) {
                search(term: $term, latitude: $latitude, longitude: $longitude, categories: $categories) {
                    total
                    business {
                        id
                        name
                        rating
                        photos
                        location {
                            address1
                        }
                        coordinates {
                            latitude
                            longitude
                        }
                    }
                }
            }`;

        return this._graphqlClient
            .request(query, {
                term,
                latitude,
                longitude,
                categories: categoriesString,
            })
            .then(data => {
                return data.search.business.map(restaurant => {
                    return {
                        ...restaurant,
                        location: restaurant.location.address1,
                    };
                });
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

    restaurant({ id }) {
        const query = `
            query Restaurant($id: String! ) {
                business(id: $id) {
                    id
                    name
                    rating
                    photos
                    location {
                        address1
                    }
                    coordinates {
                        latitude
                        longitude
                    }
                }
            }`;

        return this._graphqlClient
            .request(query, {
                id,
            })
            .then(data => {
                return {
                    ...data.business,
                    location: data.business.location.address1,
                };
            })
            .catch(err => {
                console.warn('Yelp API Business Request failed.', err);

                throw new Error(
                    'Cannot perform search. Please try again later'
                );
            });
    }
};
