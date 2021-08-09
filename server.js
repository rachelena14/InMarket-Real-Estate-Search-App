//require modules
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const controllers = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/auth");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//instance of express with port number and dynamic port
const app = express();
const PORT = process.env.PORT || 3001;

//session information
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize,
  }),
};

//use session and helpers
app.use(session(sess));
const hbs = exphbs.create({ helpers });

//Set handlebars as default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//use controller routes
app.use(controllers);

//listen on the port number
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
