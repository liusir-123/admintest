'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  UPLOAD_API_DEMO:'"https://jsonplaceholder.typicode.com"'
})
