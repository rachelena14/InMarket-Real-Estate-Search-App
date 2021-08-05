
<<<<<<< HEAD
router.get('/:id', (req, res) => {
    User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [{
                    model: Post,
                    attributes: [
                        'id',
                        'propiety_id',
                        'city',
                        'state',
                        'created_at'
                    ]
                },
                {
                    model: Propiety,
                    attributes: ['propiety_id'],
                }
            ]
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
=======
const router = require("express").Router();
const { User } = require("../../models");
const auth = require("../../utils/auth");

//GET User data minus the password
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
>>>>>>> 225ca1581e71d46b6462d4d29292bc549456d497
});

//POST User data and save to the db
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
    });
    res.status(201).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Login to the website with a username and password
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    //if no username was found then display this message
    if (!userData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    //check the password that was sent in
    const password = userData.checkPassword(req.body.password);

    //if not the right password then display this message
    if (!password) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    //save this login data for the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Logout
router.post("/logout", auth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
