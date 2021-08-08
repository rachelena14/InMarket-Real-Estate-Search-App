const router = require("express").Router();
const { User, Property, Location } = require("../models");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  try {
    const propertyData = await Property.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
        "image",
        "address",
        "list_price",
        "beds",
        "baths",
        "garage",
        "stories",
        "home_type",
        "sqft",
        "year_built",
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    //map over those post and render display
    const properties = propertyData.map((property) =>
      property.get({ plain: true })
    );
    res.render("saved-properties", {
      properties,
      loggedIn: req.session.loggedIn,
      layout: "dashboard.handlebars",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  res.render("search");
});

router.get("/searched", auth, (req, res) => {
  res.render("searched-homes");
});

module.exports = router;
