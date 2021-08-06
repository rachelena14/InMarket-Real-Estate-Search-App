const router = require("express").Router();
var axios = require("axios").default;

router.get("/", async (req, res) => {
    res.render("homepage");
});

router.get("/all", (req, res) => {
  res.render("all-homes");
})

router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }

    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
