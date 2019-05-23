'use strict'

module.exports = {
  // deeptrace: require('./middlewares/deeptrace.js'),
  helmet: require('./middlewares/helmet.js'),
  morgan: require('./middlewares/morgan.js'),
  normalizer: require('./middlewares/normalizer.js'),
  parsers: {
    json: require('./middlewares/parser-json.js'),
    urlencoded: require('./middlewares/parser-urlencoded.js')
  },
  renderer: require('./middlewares/renderer.js'),
  sentry: {
    errors: require('./middlewares/sentry-errors.js'),
    requests: require('./middlewares/sentry-requests.js'),
    scope: require('./middlewares/sentry-scope.js')
  },
  stderr: require('./middlewares/stderr.js'),
  unmatched: require('./middlewares/unmatched.js')
}