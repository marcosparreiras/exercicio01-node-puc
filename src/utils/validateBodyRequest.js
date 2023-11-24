const AppError = require('./AppError');

function validateBodyRequest(req, requiredBodyParams) {
  if (!Array.isArray(requiredBodyParams)) {
    throw new Error('requiredBodyParams should be an array');
  }

  const missingParams = [];
  requiredBodyParams.forEach((param) => {
    const paramIsValid = Object.keys(req.body).includes(param);
    if (!paramIsValid) {
      missingParams.push(param);
    }
  });

  if (missingParams.length > 0) {
    throw new AppError(`Missing: ${missingParams.join(', ')}`);
  }
  return req.body;
}

module.exports = validateBodyRequest;
