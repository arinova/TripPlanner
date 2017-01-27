const Sequelize=require('sequelize');
var db=new Sequelize("postgres://localhost:5432/tripdb");

const Place= db.define('place', {
  address: {
    type: Sequelize.STRING;
  },
  city: {
    type: Sequelize.STRING;
  },
  state: {
    type: Sequelize.STRING;
  },
  phone: {
    type: Sequelize.STRING;
  },
  location: {
    type: Sequelize.ARRAY(Sequilize.FLOAT); //lon and lat
  }
});

const Hotel= db.define({
  name: {
    type: Sequelize.STRING;
  },
  num_stars: {
    type: Sequelize.INTEGER; //integer from 1-5
  },
  amneties: {
    type: Sequelize.STRING; //of comma-delimited items
  }
});
