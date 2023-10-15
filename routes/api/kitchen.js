const router = require("express").Router();
const kitchenController = require("../../controllers/kitchenController");

  router.route("/")
  .get(kitchenController.allKitchenOrdens);
  
module.exports = router;