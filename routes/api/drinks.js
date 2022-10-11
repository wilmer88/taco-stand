const router = require("express").Router();
const drinksController = require("../../controllers/DrinksController")


router.route("/")
.get(drinksController.getDrinks)
  .post(drinksController.createDrinkOrder)
 

// Matches with "/api/orden/:id"
// router.route("/:id")
//   .get(ordenController.getOne)
//   .put(ordenController.updateOrden)
//   .delete(ordenController.remove);

module.exports = router;