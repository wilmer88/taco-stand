const router = require("express").Router();
const StripeController = require("../../controllers/StripeController")

router.route("/")
 
  .post(StripeController.payOrden);

router.route("/:id")
.put(StripeController.updatePaidField);

module.exports = router;
