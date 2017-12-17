const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => res.send('Hello Hamburg!'));

io.on('connection', function(client) {
    client.on('search-query', function(params, cb) {
        client.emit('other-event');

        return cb('lolololol');
    });
});
server.listen(3000);

module.exports = server;
