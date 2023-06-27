const router = require("express").Router();
const adminController = require("../../controllers/adminController");

  router.route("/")

  .get(adminController.adminOrdens);
module.exports = router;