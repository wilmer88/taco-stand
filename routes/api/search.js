const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/:keyword")
  .get(searchController.searchOrder);
  module.exports = router;

