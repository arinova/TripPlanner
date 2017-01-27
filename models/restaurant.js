const Sequelize=require('sequelize');
const Place=require('./place');
const db=require('./index');

const Restaurant= db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING //comma-delimited string
  },
  price: {
    type: Sequelize.STRING
  }
});

Restaurant.belongsTo(Place);
module.exports=Restaurant;
