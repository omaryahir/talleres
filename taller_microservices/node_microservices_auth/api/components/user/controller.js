const store = require('../../../store/sample');

const TABLE_COLLECTION = 'user';

function list() {
    return store.list(TABLE_COLLECTION);
}

module.exports = {
    list,
};