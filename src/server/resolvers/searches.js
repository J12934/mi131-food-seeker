const SearchModel = require('../database/models/Search');

const MAX_DISTANCE_IN_METER = 10000;

const FindNearbySearches = async ({ longitude, latitude }) => {
    return SearchModel.aggregate([
        {
            $geoNear: {
                spherical: true,
                maxDistance: MAX_DISTANCE_IN_METER,
                near: {
                    type: 'Point',
                    coordinates: [longitude, latitude],
                },
                distanceField: 'dist.calculated',
            },
        },
        {
            $group: {
                _id: '$term',
                count: { $sum: 1 },
            },
        },
        {
            $sort: {
                count: 1,
            },
        },
    ]);
};

module.exports = {
    Query: {
        async searches(_, { coordinates: { longitude, latitude } }) {
            return (await FindNearbySearches({ longitude, latitude })).map(
                search => search._id
            );
        },
    },
};
