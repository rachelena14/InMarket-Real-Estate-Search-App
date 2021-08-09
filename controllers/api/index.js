// required modules
const router = require("express").Router();

const userRoutes = require("./user-routes");
const propertyRoutes = require("./property-routes");

//routes to use
router.use("/users", userRoutes);
router.use("/property", propertyRoutes);

module.exports = router;

