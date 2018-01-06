const isArray = require('lodash/isArray');
const isNumber = require('lodash/isNumber');

const validateCoords = val => {
    if (!(isArray(val) && val.length === 2 && val.every(isNumber)))
        return false;

    const [lng, lat] = val;

    if (!(-180 <= lng && lng <= 180)) return false;
    if (!(-90 <= lat && lat <= 90)) return false;

    return true;
};

module.exports = validateCoords;
