const Sequelize=require('sequelize');
const Place=require('./place');
const db=require('./index');
const Hotel= db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER, //integer from 1-5
    validate:{
      min: 1,
      max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING //of comma-delimited items
  }
});

Hotel.belongsTo(Place);
module.exports=Hotel;
