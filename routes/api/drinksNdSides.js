const router = require("express").Router();
const drinksNdsidesController = require("../../controllers/DrinksNdsidesController")


router.route("/")
.get(drinksNdsidesController.getSides)
  .post(drinksNdsidesController.createSidesOrder)
 

// Matches with "/api/orden/:id"
// router.route("/:id")
//   .get(ordenController.getOne)
//   .put(ordenController.updateOrden)
//   .delete(ordenController.remove);

module.exports = router;