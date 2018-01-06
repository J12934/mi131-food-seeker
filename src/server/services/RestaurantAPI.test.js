/**
 * @jest-environment node
 */

const RestaurantAPI = require('./RestaurantAPI');

describe('RestaurantAPI', () => {
    describe('search()', () => {
        it('should return data in the right format', async () => {
            class GraphQLClientMock {
                async request() {
                    return {
                        search: {
                            total: 2,
                            business: [
                                {
                                    id: 'johns-burgers-kiel',
                                    name: "John's Burgers",
                                    rating: 4.5,
                                    coordinates: {
                                        latitude: 54.33204,
                                        longitude: 10.12449,
                                    },
                                },
                                {
                                    id: 'kitty-rock-belly-full-kiel',
                                    name: 'Kitty Rock Belly Full',
                                    rating: 4.5,
                                    coordinates: {
                                        latitude: 54.33254,
                                        longitude: 10.11822,
                                    },
                                },
                            ],
                        },
                    };
                }
            }

            const restaurantAPI = new RestaurantAPI({
                graphQLClient: GraphQLClientMock,
            });

            const results = await restaurantAPI.search({
                term: 'burger',
                coordinates: {
                    latitude: 54.33254,
                    longitude: 10.11822,
                },
            });

            expect(results).toMatchSnapshot();
        });

        it('should throw a non specific error message if the api request fails.', async () => {
            class GraphQLClientMock {
                async request() {
                    throw new Error('No network connection.');
                }
            }

            const restaurantAPI = new RestaurantAPI({
                graphQLClient: GraphQLClientMock,
            });

            try {
                await restaurantAPI.search({
                    term: 'burger',
                    coordinates: {
                        latitude: 54.33254,
                        longitude: 10.11822,
                    },
                });

                expect('unreachable').toBe(true);
            } catch (err) {
                expect(err).toMatchSnapshot();
            }
        });
    });

    describe('typeahead()', () => {
        it('should return data in the right format', async () => {
            class AxiosMock {
                static create = () => {
                    return new AxiosMock();
                };

                async get() {
                    return {
                        data: {
                            categories: [
                                { alias: 'burgers', title: 'Burgers' },
                                { alias: 'hotdogs', title: 'Fast Food' },
                                { alias: 'restaurants', title: 'Restaurants' },
                            ],
                            businesses: [],
                            terms: [
                                { text: 'In-n-out Burger' },
                                { text: 'The Habit Burger Grill' },
                                { text: 'Burgers and Beer' },
                            ],
                        },
                    };
                }
            }

            const restaurantAPI = new RestaurantAPI({
                axios: AxiosMock,
            });

            const results = await restaurantAPI.typeahead({
                term: 'burger',
                coordinates: {
                    latitude: 54.33254,
                    longitude: 10.11822,
                },
            });

            expect(results).toMatchSnapshot();
        });

        it('should hide errors returned from the api by returining a empty array', async () => {
            class AxiosMock {
                static create = () => {
                    return new AxiosMock();
                };

                async get() {
                    throw new Error('Network Error');
                }
            }

            const restaurantAPI = new RestaurantAPI({
                axios: AxiosMock,
            });

            const result = await restaurantAPI.typeahead({
                term: 'burger',
                coordinates: {
                    latitude: 54.33254,
                    longitude: 10.11822,
                },
            });

            expect(result).toEqual([]);
        });
    });
});
