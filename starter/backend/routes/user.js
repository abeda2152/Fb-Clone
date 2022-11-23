const express = require("express");
const { register } = require("../controllers/user"); //like header

const router = express.Router();

/*router.get("/user", (req, res) => {
  res.send("welcome from user home");
});*/

router.post("/register", register); //comes from controller

module.exports = router;
