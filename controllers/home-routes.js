const router = require("express").Router();
var axios = require("axios").default;

router.get("/", async (req, res) => {
    console.log("home route hit");
    var city = req.body.city;
    var state = req.body.state;
    try {
        
    var options =  {
      method: 'GET',
      url: 'https://real-estate12.p.rapidapi.com/listings/sale',
      params: {
        state: state,
        city: city,
        page: '1',
        sort: 'relevant',
        type: 'single-family,multi-family'
      },
      headers: {
        "x-rapidapi-key": "85f2731bcemshe53e61768b66fa9p109889jsndb3639d2e292",
        "x-rapidapi-host": "real-estate12.p.rapidapi.com"
      }
    };
    const data = await axios.request(options)
        var homes = data.data.properties;
        console.log(data.data.properties[0]);
        res.render("homepage", {homes});
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router