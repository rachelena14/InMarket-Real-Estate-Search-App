const router = require("express").Router();

const userRoutes = require("./user-routes");
const propertyRoutes = require("./property-routes");

router.use("/users", userRoutes);
router.use("/posts", propertyRoutes);

module.exports = router;
