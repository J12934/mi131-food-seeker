module.exports = {
    Query: {
        search(_, { query, coordinates }) {
            return [
                {
                    id: '12345678',
                    name: 'Johns Burger',
                    rating: 4.5,
                    coordinates,
                },
            ];
        },
        typeahead(_, { query, coordinates }) {
            return [{ id: '12345678', name: 'Johns Burger' }];
        },
        restaurant(_, { id }) {
            return {
                id: '12345678',
                name: 'Johns Burger',
                rating: 4.5,
                coordinates,
            };
        },
    },
};
