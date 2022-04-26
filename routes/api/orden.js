const router = require("express").Router();
const ordenController = require("../../controllers/OrdenControllers");

// Matches with "/api/books"
router.route("/")
  .get(ordenController.allOrdens)
  .post(ordenController.create);

// Matches with "/api/books/:id"
// router
//   .route("/orden/:id")
//   .get(ordenController.findById)
//   .put(ordenController.update)
//   .delete(ordenController.remove);

module.exports = router;
