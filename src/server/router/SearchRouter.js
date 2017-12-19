const SearchModel = require('../models/Search');
const YelpAPI = require('../services/YelpAPI');

module.exports = class SearchRouter {
    constructor({ client, searchModel = SearchModel, yelpAPI = YelpAPI } = {}) {
        this._client = client;
        this._searchModel = searchModel;
        this._yelpAPI = new yelpAPI();
    }

    /**
     * Handle a search query for a specific term and location
     */
    async query({ term, location }) {
        // TODO Validation

        const [_, results] = await Promise.all([
            this._searchModel.create({
                term,
                location,
            }),
            this._yelpAPI.search({ term, location }),
        ]);

        // TODO emit some sort of event for nearby users

        this._client.emit('results', results);
    }

    /**
     * Handle a typeahead request to show suggestions
     * for the currently typed term and location
     *
     * TODO
     */
    async typeahead() {}
};
