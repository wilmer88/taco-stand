const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/nombreDeOrden")
  .get(searchController.searchOrder);
  module.exports = router;

