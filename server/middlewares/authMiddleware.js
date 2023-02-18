const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded.id).select("-password");
      if (req.user === null) {
        throw new Error();
      }
      next();
    } catch {
      res.status(401);
      throw new Error("unauthorized");
    }
  }
  if (!token) {
    res.status(400);
    throw new Error("unauthorized, no token");
  }
});

module.exports = protect;
