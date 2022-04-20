const router = require("express").Router();
const ordenRoutes = require("./orden");
const signupRoutes = require("./user");
const logInRoutes = require("./login")

router.use("/orden", ordenRoutes);
router.use("/signup", signupRoutes);
router.use("/login", logInRoutes)
module.exports = router;