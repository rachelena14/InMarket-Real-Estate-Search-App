const User = require('./User');
const Property = require('./Properties');
const Location = require("./Location")

Property.belongsTo(User, {
    foreignKey: 'user_id',
});

Location.belongsTo(Property, {
    foreignKey: 'property_id',
});

Property.hasMany(Location, {
    foreignKey: 'property_id'
})

module.exports = { User, Property, Location };





