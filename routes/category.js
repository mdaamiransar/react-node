module.exports = (app) => {
    const category = require('../controller/category.js');

    app.post('/category', category.create);

    app.get('/category', category.findAll);

    app.get('/category/:categoryId', category.findOne);

    // app.put('/category/:categoryId', category.update);

    // app.delete('/category/:categoryId', category.delete);
}