const router = require("express").Router();
const kitchenController = require("../../controllers/ordenController");

  router.route("/")
  .get(kitchenController.adminOrdens);
  
module.exports = router;