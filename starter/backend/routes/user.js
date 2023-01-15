const express = require("express");
//const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
const {
  register,
  activateAccount,
  login,
  auth,
  sendVerification,
  findUser,
  sendResetPasswordCode,
  validateResetCode,
  changePassword,
} = require("../controllers/user"); //like header
const { authUser } = require("../middlewares/auth");

const router = express.Router();

/*router.get("/user", (req, res) => {
  res.send("welcome from user home");
});*/

router.post("/register", register); //comes from controller
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerification);
router.post("/findUser", findUser);
router.post("/sendResetPasswordCode", sendResetPasswordCode);
router.post("/validateResetCode", validateResetCode);
router.post("/changePassword", changePassword);
////router.post("/auth", authUser, auth);

module.exports = router;
