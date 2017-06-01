const jwt = require("jsonwebtoken");

module.exports = {
  getToken: userId => {
    return jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          userId: userId
        }
      },
      process.env.JWT_SECRET
    );
  },
  secureEndpointMiddleware: (req, res, next) => {
    const token = req.header("Authorization");
    let data;
    try {
      data = jwt.verify(token, JWT_SECRET);
      if (data === undefined) {
        throw new Error("Not authorized");
      }
    } catch (err) {
      res.sendStatus(403);
      return;
    }
    req.body.userId = data.userId;
    next();
  }
};
