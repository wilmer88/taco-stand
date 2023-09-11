const router = require("express").Router();
const adminController = require("../../controllers/adminController");

  router.route("/:keyword")
  .get(adminController.getUnpreparedOrders);

  router.route("/:id")
  .put()
  
module.exports = router;