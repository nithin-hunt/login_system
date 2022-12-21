const express = require("express");
const registeration = require("../controllers/users");
const router = express.Router(); 

router.post("/register", registeration);

module.exports = router;