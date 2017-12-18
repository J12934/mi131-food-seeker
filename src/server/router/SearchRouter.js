const SearchModel = require('../models/Search');

module.exports = class SearchRouter {
    constructor({ client, searchModel = SearchModel }) {
        this._client = client;
        this._searchModel = searchModel;
    }

    /**
     * Handle a search query for a specific term and location
     */
    async query({ term, location }) {
        // TODO Validation

        await this._searchModel.create({
            term,
            location,
        });

        // Perform API Request to get the results

        // TODO emit some sort of event for nearby users

        this._client.emit('results', {
            things: 'stuff',
        });
    }

    /**
     * Handle a typeahead request to show suggestions
     * for the currently typed term and location
     *
     * TODO
     */
    async typeahead() {}
};
