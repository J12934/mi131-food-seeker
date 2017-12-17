let server, socket;

const io = require('socket.io-client');

describe('Server', () => {
    beforeAll(done => {
        server = require('./');
        server.on('listening', done);

        socket = io('http://localhost:3000');
    });

    afterAll(done => {
        server.close(done);
    });

    test('Can recieve socket events', done => {
        socket.emit(
            'search-query',
            {
                topic: 'Burgers',
                latitude: 121.1231,
                longiditude: 123.1231,
            },
            answer => {
                expect(answer).toBe('lolololol');
                done();
            }
        );

        expect(true).toBeTruthy();
    });
});
