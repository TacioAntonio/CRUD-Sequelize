const jwt = require('jsonwebtoken');
const hash = require('../../config/auth');

function checkAuthentication(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
      return res.json({ success: false, message: "Not authorized", statusCode: 401 });
    }

    jwt.verify(token, hash.secret, (err, payload) => {
      if (err) {
        return res.json({ success: false, message: "Ocorred a error", statusCode: 403 });
      }

      req.payload = payload;

      next();
    });
}

module.exports = checkAuthentication;
