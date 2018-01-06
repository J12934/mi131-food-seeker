const EventEmitter = require('events');

class SearchEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.types = { SEARCH_STARTED: 'SEARCH_EVENTS__SEARCH_STARTED' };
    }
}

module.exports = new SearchEventEmitter();
