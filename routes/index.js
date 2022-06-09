const charactersRouter = require('./characters');
const planetsRouter = require('./planets');

function routerApi(app) {
    app.use('/characters', charactersRouter);
    app.use('/planets', planetsRouter);
}

module.exports = routerApi;