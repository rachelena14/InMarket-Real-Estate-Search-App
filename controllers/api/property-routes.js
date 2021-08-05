const router = require("express").Router();
const { User, Property, Location } = require("../../models");
const auth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const propertyData = await Property.findAll({
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
    res.status(200).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const propertyData = await Property.create({
      list_price: req.body.list_price,
      beds: req.body.beds,
      baths: req.body.baths,
      garage: req.body.garage,
      stories: req.body.stories,
      home_types: req.body.home_types,
      sqft: req.body.sqft,
      year_built: req.body.year_built,
      user_id: req.session.user_id,
    });
    res.status(200).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const propertyData = await Property.findOne({
      where: {
        id: req.params.id,
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

    //if no post data then display this message
    if (!propertyData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const propertyData = await Property.destroy({
      where: {
        id: req.params.id,
      },
    });
    //if no post found then display this message
    if (!propertyData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(204).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
