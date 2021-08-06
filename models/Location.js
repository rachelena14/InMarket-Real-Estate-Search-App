const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
  {
    address: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.INTEGER,
    },
    state_code: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    property_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'property',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "location",
  }
);

module.exports = Location;
