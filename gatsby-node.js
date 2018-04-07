/**
 * @flow
 *
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const dotenv = require('dotenv');

dotenv.config();

exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
