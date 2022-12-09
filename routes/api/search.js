const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/:id")
  .get(searchController.searchOrder);
  module.exports = router;

