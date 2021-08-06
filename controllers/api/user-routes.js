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
});

//POST User data and save to the db
router.post("/", async (req, res) => {
  console.log("creating new user");
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
    res.status(200).json(userData);
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
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
