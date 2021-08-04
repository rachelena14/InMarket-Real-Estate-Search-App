const sequelize = require('../config/connection');
const { Propiety, User, Comment } = require('../models');
const router = require('express').Router();
router.get('/', (req, res) => {
    Propiety.findAll({
            attributes: [
                'id',
                'title',
                'content',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'propiety_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPropietyData => {
            const propieties = dbPropietyData.map(propiety => propiety.get({ plain: true }));
            res.render('homepage', { propieties, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/propiety/:id', (req, res) => {
    Propiety.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'propiety_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPropietyData => {
            if (!dbPropietyData) {
                res.status(404).json({ message: 'No propiety found with this id' });
                return;
            }
            const propiety = dbPropietyData.get({ plain: true });
            console.log(propiety);
            res.render('single-propiety', { propiety, loggedIn: req.session.loggedIn });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/propieties-comments', (req, res) => {
    Propiety.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'content',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'propiety_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPropietyData => {
            if (!dbPropietyData) {
                res.status(404).json({ message: 'No propiety found with this id' });
                return;
            }
            const propiety = dbPropietyData.get({ plain: true });

            res.render('propieties-comments', { propiety, loggedIn: req.session.loggedIn });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;