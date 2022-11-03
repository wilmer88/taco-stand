const router = require("express").Router();
const ordenRoutes = require("./orden");
const authRoutes = require("./auth");
// const drinksRoutes = require("./drinksNdSides");
const stripeRoutes = require("./payment");


router.use("/payment", stripeRoutes);
router.use("/login", authRoutes );
router.use("/signup", authRoutes);
router.use("/orden", ordenRoutes);
// router.use("/drinks", drinksRoutes);

module.exports = router;
