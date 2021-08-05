<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const propietyRoutes = require('./propiety-routes');
router.use('/users', userRoutes);
router.use('/ppropieties', propietyRoutes);

module.exports = router;
=======
const router = require("express").Router();

const userRoutes = require("./user-routes");
const propertyRoutes = require("./property-routes");

router.use("/users", userRoutes);
router.use("/posts", propertyRoutes);

module.exports = router;
>>>>>>> 225ca1581e71d46b6462d4d29292bc549456d497
