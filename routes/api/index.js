const router = require("express").Router();
const ordenRoutes = require("./orden");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const searchRoutes = require("./search");
const stripeRoutes = require("./payment");
const adminDash = require("./admin");
const kitchen = require("./kitchen");


router.use("/adminDash", adminDash);
router.use("/payment", stripeRoutes);
router.use("/login", authRoutes );
router.use("/signup", userRoutes );
router.use("/orden", ordenRoutes);
router.use("/myorders", userRoutes);
router.use("/searcho", searchRoutes);
router.use("/unprepared", adminDash);
router.use("/kitchen", kitchen);





// router.use("/drinks", drinksRoutes);
module.exports = router;
