const io = require('socket.io-client');

describe('Server', () => {
    let server, socket;

    beforeAll(done => {
        server = require('./');
        server.on('listening', done);

        const { port } = server.address();

        socket = io(`http://localhost:${port}`);
    });

    afterAll(done => {
        server.close(done);
    });

    test('Can recieve socket events', done => {
        socket.emit('tick');

        socket.on('tock', results => {
            expect(results).toBe(undefined);
            done();
        });
    });
});
