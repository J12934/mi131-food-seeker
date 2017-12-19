const SearchRouter = require('./SearchRouter');

jest.mock('../services/YelpAPI');

describe('SearchRouter', () => {
    it('should emit a new event when the search succeds', async () => {
        const wsMock = new class {
            emit = jest.fn();
        }();

        const searchRouter = new SearchRouter({ client: wsMock });

        const response = await searchRouter.query({
            term: 'burger',
            location: 'Kiel',
        });

        expect(wsMock.emit).toBeCalled();
        expect(wsMock.emit.mock.calls).toMatchSnapshot();
    });
});
