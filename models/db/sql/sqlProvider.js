var QueryFile = require('pg-promise').QueryFile;

function sql(file) {
    var path = './models/db/sql/' + file;

    var options = {
        debug: true,
        minify: true,
        compress: true,
        params: {
            schema: 'public' // 'public' is the default schema
        }
    };

    return new QueryFile(path, options);
}

module.exports = {
    users: {
        add: sql('users/add.sql'),
        all: sql('users/all.sql'),
        find: sql('users/find.sql'),
        findByEmail: sql('users/findByEmail.sql'),
        remove: sql('users/remove.sql'),
        update: sql('users/update.sql')
    },
    barterItems: {
        add: sql('barterItems/add.sql'),
        addImages: sql('barterItems/addImages.sql'),
        all: sql('barterItems/all.sql'),
        find: sql('barterItems/find.sql'),
        findByUserId: sql('barterItems/findByUserId.sql'),
        recommendations: sql('barterItems/recommendations.sql'),
        remove: sql('barterItems/remove.sql'),
        update: sql('barterItems/update.sql'),
        vote: sql('barterItems/vote.sql')
    }
};
