const Sequelize=require('sequelize');
var db=new Sequelize("postgres://localhost:5432/tripplanner");

//
// const Place= db.define('place', {
//   address: {
//     type: Sequelize.STRING
//   },
//   city: {
//     type: Sequelize.STRING
//   },
//   state: {
//     type: Sequelize.STRING
//   },
//   phone: {
//     type: Sequelize.STRING
//   },
//   location: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT) //lon and lat
//
//   }
// });
//
// const Hotel= db.define('hotel', {
//   name: {
//     type: Sequelize.STRING
//   },
//   num_stars: {
//     type: Sequelize.INTEGER, //integer from 1-5
//     validate:{
//       min: 1,
//       max: 5
//     }
//   },
//   amenities: {
//     type: Sequelize.STRING //of comma-delimited items
//   }
// });
//
// const Activity=db.define('activity', {
//   name: {
//     type: Sequelize.STRING
//   },
//   age_range: {
//     type: Sequelize.STRING
//   }
// });
//
// const Restaurant= db.define('restaurant', {
//   name: {
//     type: Sequelize.STRING
//   },
//   cuisine: {
//     type: Sequelize.STRING //comma-delimited string
//   },
//   price: {
//     type: Sequelize.STRING
//   }
// });

// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);

module.exports=db;

// module.exports={
//   db: db
//   // Place: Place,
//   // Hotel: Hotel,
//   // Restaurant: Restaurant,
//   // Activity: Activity
// }
