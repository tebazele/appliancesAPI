// NOTE environment variables

require('dotenv').config()
// @ts-ignore
// eslint-disable-next-line no-global-assign
// NOTE this brings in all the node modules this project is dependant on

require = require('esm')(module)

// NOTE this connect main.js
module.exports = require('./server/main')
