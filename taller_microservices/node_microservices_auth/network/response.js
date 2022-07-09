exports.success = function(req, res, message, status) {
  let statusCode = status || 200;
  res.status(status).send({
    error: false,
    status: status,
    body: message
  });
}

exports.error = function(req, res, message, status) {
  let statusCode = status || 500;
  let statusMessage = message || "Internal Server Error";
  res.status(status).send({
    error: true,
    status: status,
    body: statusMessage
  });
}


