const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./propiety-routes');
const commentRoutes = require('./comment-routes');
router.use('/users', userRoutes);
router.use('/propieties', propietyRoutes);
router.use('/comments', commentRoutes);

module.exports = router;