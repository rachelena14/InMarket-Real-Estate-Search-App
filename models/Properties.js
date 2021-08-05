const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Property extends Model {}

Property.init(
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    autoIncrement: true,
    },
    list_price: {
    type: DataTypes.INTEGER,
    },
    beds: {
    type: DataTypes.INTEGER,
    },
    baths: {
    type: DataTypes.INTEGER,
    },
    garage: {
    type: DataTypes.INTEGER,
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
    modelName: 'property',
    }
);

module.exports = Property;
