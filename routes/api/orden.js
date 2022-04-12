const router = require("express").Router();
const ordenController = require("../../controllers/OrdenControllers");

router.route("/")
.get(ordenController.findAll)
.post(ordenController.create)

router
  .route("/:id")
  .get(ordenController.findById)
  .put(ordenController.update)
//   .delete(ordenController.delete);
// router.route("/:id")
// .get(ordenController.findById)
// .put(ordenController.update)
// .delete(ordenController.delete)

module.exports = router;