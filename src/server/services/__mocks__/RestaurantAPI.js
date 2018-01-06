module.exports = class YelpAPIMock {
    async search() {
        return [
            {
                id: 'johns-burgers-kiel',
                name: "John's Burgers",
                rating: 4.5,
                coordinates: {
                    latitude: 54.33204,
                    longitude: 10.12449,
                },
            },
            {
                id: 'kitty-rock-belly-full-kiel',
                name: 'Kitty Rock Belly Full',
                rating: 4.5,
                coordinates: {
                    latitude: 54.33254,
                    longitude: 10.11822,
                },
            },
        ];
    }

    async typeahead() {
        return ['Burgers', 'Burmese', 'Fast Food'];
    }

    async restaurant() {
        return {
            id: 'johns-burgers-kiel',
            name: "John's Burgers",
            rating: 4.5,
            coordinates: { latitude: 54.33204, longitude: 10.12449 },
        };
    }
};
