const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/")
// .get(ordenController.findAll)
.post(authController.create)

// router
//   .route("/:id")

//   .get(ordenController.findById)
//   .put(ordenController.update)
//   .delete(ordenController.remove);


module.exports = router;