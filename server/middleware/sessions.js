exports.auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({
      'Unauthorized': 'No token provided'
    });
  }

  // const token = authorization.split(" ")[1];

  next(token);
}