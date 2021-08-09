//required modules
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//class of property to extends model class
class Property extends Model {}

//fields to include in the property table
Property.init(
  {
    image: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    list_price: {
      type: DataTypes.STRING,
    },
    beds: {
      type: DataTypes.INTEGER,
    },
    baths: {
      type: DataTypes.INTEGER,
    },
    garage: {
      type: DataTypes.STRING,
    },
    stories: {
      type: DataTypes.INTEGER,
    },
    home_type: {
      type: DataTypes.STRING,
    },
    sqft: {
      type: DataTypes.INTEGER,
    },
    year_built: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "property",
  }
);

module.exports = Property;
