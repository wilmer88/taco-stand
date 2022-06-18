const router = require("express").Router();
const ordenRoutes = require("./orden");
// const userRoutes = require("./user");
const authRoutes = require("./auth");


router.use("/login", authRoutes );
router.use("/signup", authRoutes);
router.use("/orden", ordenRoutes);


module.exports = router;
