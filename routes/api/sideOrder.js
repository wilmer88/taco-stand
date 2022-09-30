const router = require("express").Router();
const sideController = require("../../controllers/sideOrdenControllers");


router.route("/")
.get(sideController.SideOrders)
  .post(sideController.createSideOrder)
 

// Matches with "/api/orden/:id"
// router.route("/:id")
//   .get(ordenController.getOne)
//   .put(ordenController.updateOrden)
//   .delete(ordenController.remove);

module.exports = router;
