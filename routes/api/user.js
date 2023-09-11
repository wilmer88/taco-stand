const router = require("express").Router();
const userController = require("../../controllers/UserController");
router.route("/:keyword")
.get(userController.getUser)

router.route("/")
  .post(userController.signup)





module.exports = router;
