const ClientError = require('./ClientError');

class InvariantError extends ClientError {
  constructor(message) {
    super(message, 400); // status 400 untuk payload buruk
    this.name = 'InvariantError';
  }
}

module.exports = InvariantError;
