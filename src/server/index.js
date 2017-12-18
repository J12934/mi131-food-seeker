const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const SearchRouter = require('./router/SearchRouter');

io.on('connection', function(client) {
    const searchRouter = new SearchRouter({ client });

    // Event for testing the connection
    client.on('tick', () => {
        client.emit('tock');
    });

    // Handeling Search Queries
    client.on('query', searchRouter.query);

    // Handeling Search Typeahead requests
    client.on('typeahead', searchRouter.typeahead);
});
server.listen(5000);

module.exports = server;
