const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/")
  .post(authController.login)
  // .post(authController.)





module.exports = router;
