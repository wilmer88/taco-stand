const router = require("express").Router();
const StripeController = require("../../controllers/StripeController")

router.route("/")
 
  .post(StripeController.payOrden);

// Matches with "/api/orden/:id"

 

module.exports = router;
