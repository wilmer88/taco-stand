const router = require("express").Router();
const ordenRoutes = require("./orden");
const sideOrderRoutes = require("./sideOrder");
const authRoutes = require("./auth");
const drinksRoutes = require("./drinks")

router.use("/sideOrden", sideOrderRoutes);
router.use("/login", authRoutes );
router.use("/signup", authRoutes);
router.use("/orden", ordenRoutes);
router.use("/drinks", drinksRoutes);

module.exports = router;
