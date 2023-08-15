

function errorLogs(err, req, res, next) {
  console.log('erroRLogs');
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHAndler');
  res.status(501).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = {
  errorLogs,
  errorHandler
}
