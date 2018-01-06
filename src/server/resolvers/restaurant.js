const RestaurantAPI = require('../services/RestaurantAPI');
const SearchEventEmitter = require('../events/SearchEventEmitter');

const restaurantAPI = new RestaurantAPI();

module.exports = {
    Query: {
        search(_, { term, coordinates }) {
            SearchEventEmitter.emit(SearchEventEmitter.types.SEARCH_STARTED, {
                term,
                coordinates,
            });

            return restaurantAPI.search({ term, coordinates });
        },
        typeahead(_, { term, coordinates }) {
            return restaurantAPI.typeahead({ term, coordinates });
        },
        restaurant(_, { id }) {
            return restaurantAPI.restaurant({ id });
        },
    },
};
