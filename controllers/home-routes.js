// required modules
const router = require("express").Router();
var axios = require("axios").default;

//render the homepage
router.get("/", async (req, res) => {
    res.render("homepage");
});

//render login page
router.get("/login", (req, res) => {
  console.log("trying to login");
  try {
    if (req.session.loggedIn) {
      console.log("redirecting back to home");
      res.redirect("/");
      return;
    }

    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// render singup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
