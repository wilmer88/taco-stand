const router = require("express").Router();
const ordenController = require("../../controllers/OrdenControllers");
// Matches with "/api/ordens"
router.route("/")
  .get(ordenController.allOrdens)
  .post(ordenController.create);
// Matches with "/api/orden/:id"
router.route("/:id")
  .get(ordenController.getOne)
  .put(ordenController.updateOrden)
  .delete(ordenController.remove);

module.exports = router;
