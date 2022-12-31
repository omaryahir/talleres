const db = {
    'user': [
        {id: 1, name: 'Ardi'},
        {id: 2, name: 'Bobus'},
    ],
};

function list(collection) {
    return db[collection];
}

function get(collection, id) {
    let col = list(collection);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(collection, data) {
    db[collection].push(data);
}

function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
};
