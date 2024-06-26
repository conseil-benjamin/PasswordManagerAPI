const express = require("express");

const {
  login, isAdmin
} = require("../controllers/auth.controllers");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/login", login);
router.get("/is-admin",authMiddleware, isAdmin);

module.exports = router;