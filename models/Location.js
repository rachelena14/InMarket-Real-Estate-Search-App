const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Location extends Model {}

Location.init(
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
    autoIncrement: true,
    }, 
    address: {
    type: DataTypes.STRING,
    },
    postal_code: {
    type: DataTypes.INTEGER,
    },
    state_code: {
    type: DataTypes.INTEGER,
    }, 
    city: {
    type: DataTypes.STRING,
    }
    }
) 




