const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const SearchModel = require('./models/Search');

app.get('/', (req, res) => res.send('Hello Hamburg!'));

io.on('connection', function(client) {
    // Event for testing the connection
    client.on('tick', () => {
        client.emit('tock');
    });

    client.on('search-query', async function({ term, location }) {
        await SearchModel.create({
            term,
            location,
        });

        client.emit('search-results', {
            things: 'stuff',
        });
    });
});
server.listen(5000);

module.exports = server;
