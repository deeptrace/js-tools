'use strict'

const UserFaultHttpError = require('./UserFaultHttpError.js')

module.exports = class NotFoundHttpError extends UserFaultHttpError {
  /**
   * @param {Object} params
   * @param {string} params.code
   * @param {string} params.message
   * @param {string} [params.stack]
   */
  constructor ({ code, message, stack }) {
    super({ status: 404, code, message, stack })
  }
}
