module.exports = class YelpAPIMock {
    search() {
        return Promise.resolve({
            search: { business: [{ name: 'resturant 1' }] },
        });
    }
};
