const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //Development

module.exports = connection;