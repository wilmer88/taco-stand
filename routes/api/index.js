const router = require("express").Router();
const ordenRoutes = require("./orden");
const userRoutes = require("./user");
const authRoutes = require("./auth");




router.use("/orden", ordenRoutes);
router.use("/user", userRoutes);
router.use("/signup", authRoutes);

module.exports = router;
