// required modules
const router = require("express").Router();
const { User, Property, Location } = require("../../models");
const auth = require("../../utils/auth");
const axios = require("axios")

//api route to get all the property data
router.get("/", async (req, res) => {
  try {
    const propertyData = await Property.findAll({
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

    res.status(200).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//api route to save the specific property
router.post("/saveHome/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  console.log("im in the server side POST");
  try {
    const propertyData = await Property.create({
      image: req.body.image,
      list_price: req.body.list_price,
      address: req.body.address,
      beds: req.body.beds,
      baths: req.body.baths,
      garage: req.body.garage,
      stories: req.body.stories,
      home_type: req.body.home_type,
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

//route to get the properties based on the city and state
router.get("/getHomes/:city/:state", async (req, res) => {
  var city = req.params.city;
  var state = req.params.state;
  try {
    var options = {
      method: "GET",
      url: "https://real-estate12.p.rapidapi.com/listings/sale",
      params: {
        state: state,
        city: city,
        page: "1",
        sort: "relevant",
        type: "single-family,multi-family",
      },
      headers: {
        "x-rapidapi-key": "241deef884msh3e6beced5054f2bp1187cfjsn4317bac7d9fe",
        "x-rapidapi-host": "real-estate12.p.rapidapi.com",
      },
    };
    const data = await axios.request(options);
    var homes = data.data.properties;
    homes.user_id = req.session.user_id,
    homes.push({user_id: req.session.user_id})
    res.json({homes: homes, user_id: req.session.user_id}); 

    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//route to get a single property (not implemented)
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

//delete a single route (not implemented)
router.delete("/:id", 
auth, async (req, res) => {
  try {
    const propertyData = await Property.destroy({
      where: {
        id: req.params.id,
      },
    });
    //if no post found then display this message
    if (!propertyData) {
      res.status(404).json({ message: "No property found with this id" });
      return;
    }
    res.status(204).json(propertyData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
