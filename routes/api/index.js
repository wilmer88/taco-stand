const router = require("express").Router();
const ordenRoutes = require("./orden");
const sideOrderRoutes = require("./sideOrder");
const authRoutes = require("./auth");

router.use("/sideOrden", sideOrderRoutes);
router.use("/login", authRoutes );
router.use("/signup", authRoutes);
router.use("/orden", ordenRoutes);




module.exports = router;
