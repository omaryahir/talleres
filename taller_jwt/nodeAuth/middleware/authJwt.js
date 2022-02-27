const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");

const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, coonfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id
        next();
    });
}

isUserRole = (userId, role) => {
  User.findByPk(userId).then( user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          return true;
        }
      }
      return false;
    });
  });
}


isAdmin = (req, res, next) => {
  if (isUserRole(req.userId, "admin")) {
    next();
  } else {
    res.status(403).send({
      message: "Require Admin Role!"
    });
  }
} 


isModerator = (req, res, next) => {
  if (isUserRole(req.userId, "moderator")) {
    next();
  } else {
    res.status(403).send({
      message: "Require Admin Role!"
    });
  }
} 

isModeratorOrAdmin = (req, res, next) => {
  if (isUserRole(req.userId, "moderator")
      || isUserRole(req.userId, "admin")) {
    next();
  } else {
    res.status(403).send({
      message: "Require Admin Role!"
    });
  }
}

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
}

module.exports = authJwt;

