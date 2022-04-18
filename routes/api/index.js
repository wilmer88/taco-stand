const router = require("express").Router();
const ordenRoutes = require("./orden");
const signupRoutes = require("./user");

router.use("/orden", ordenRoutes);
router.use("/signup", signupRoutes);

module.exports = router;