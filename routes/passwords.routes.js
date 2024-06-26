const express = require("express");

const {
  getAllPasswords, addPassword, updatePassword, deletePassword, getPassword
} = require("../controllers/passwords.controller");

const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { route } = require("./shortcuts.routes");

router.get("/get-all-passwords", authMiddleware, getAllPasswords);
router.post("/add-password", authMiddleware, addPassword);
router.put("/update-password/:id", authMiddleware, updatePassword);
router.delete("/delete-password/:id", authMiddleware, deletePassword);
router.get("/get-password/:id", authMiddleware, getPassword);
module.exports = router;