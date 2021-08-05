const User = require('./User');
const Property = require('./Properties');

Property.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Property, {
    foreignKey: 'property_id',
});

module.exports = { User, Property };





