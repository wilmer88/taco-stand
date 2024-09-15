const router = require("express").Router();
const adminController = require("../../controllers/adminController");

  router.route("/")
  .get(adminController.allOrdens);
  
module.exports = router;