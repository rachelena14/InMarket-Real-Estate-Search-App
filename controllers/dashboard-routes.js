const router = require("express").Router();
const { User, Property } = require("../models");
const auth = require("../utils/auth");

router.get("/", auth, async (req, res) => {
  try {
    const propertyData = await Property.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: [
        "id",
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
          model: Location,
          attributes: ["id", "address", "postal_code", "state_code", "city"],
        },
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
    res.render("all-properties", {
      properties,
      loggedIn: req.session.loggedIn,
      layout: "dashboard.handlebars",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
