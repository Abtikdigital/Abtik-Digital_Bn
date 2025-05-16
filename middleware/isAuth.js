
const jwt = require("jsonwebtoken");
const isAuth = (req, res, next) => {
  try {
    let authToken = req.cookies.authToken;
    let secretKey = process.env.secret_key;
    let deocdedToken;
    try {
      deocdedToken = jwt.verify(authToken,secretKey);
      req.deocdedToken=deocdedToken
      next()
    } catch (error) {
      return res
        .status(401)
        .json({ isSuccess: false, message: "Invalid Token" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        isSuccess: false,
        message: "Error Occured In Is Auth Middleware",
      });
  }
};

module.exports = { isAuth };
