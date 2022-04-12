const router = require("express").Router();
const ordenRoutes = require("./orden");

router.use("/orden", ordenRoutes);

module.exports = router;