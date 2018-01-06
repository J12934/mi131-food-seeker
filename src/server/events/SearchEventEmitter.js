const EventEmitter = require('events');

class SearchEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.types = { SEARCH_STARTED: 'SEARCH_EVENTS__SEARCH_STARTED' };

        this.on('error', console.error);
    }
}

module.exports = new SearchEventEmitter();
