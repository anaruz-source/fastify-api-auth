const jwt = require('jsonwebtoken');

const verifyToken = (req, reply, done) => {
  const { token } = req.headers;

  console.log('token is', token)
  jwt.verify(token, 'my_jwt_secret', (err, decoded) => {
    if (err) {
      done(new Error('Unauthorized'));
    }

    req.user = {
      id: decoded.id, // pass in the user's info
    };
  });

  done();
};

module.exports = verifyToken