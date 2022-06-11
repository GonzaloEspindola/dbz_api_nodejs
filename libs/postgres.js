const { Pool } = require('pg');
const { config } = require('../config/config');

//obteniendo variables de ambiente declaradas en el archivo env
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
 
//creando la pool de conexiones
const pool = new Pool({connectionString: URI});

module.exports = pool;
