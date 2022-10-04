exports.success = (req, res, status, message) => {
  res.status(status || 200).send({
    error: false,
    message: message || "",
    status: status || 200,
  });
};

exports.error = (req, res, status, message) => {
  res.status(status || 500).send({
    error: true,
    message: message || "Internal Server Error",
    status: status || 500,
  });
};
