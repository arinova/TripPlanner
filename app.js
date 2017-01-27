const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const nunjucks=require('nunjucks');
const path=require('path');
var app=express();

const router=require('./routes');
var db = require('./models');
var Place = require('./models/place');
var Hotel = require('./models/hotel');
var Restaurant = require('./models/restaurant');
var Activity = require('./models/activity');
var Promise = require('bluebird');


app.set("view engine", "html");
app.engine("html", nunjucks.render);
var env=nunjucks.configure("views", {noCache: true});
require('./filters')(env);


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


/*sync database*/
Place.sync({})
  .then(function(){
    return Hotel.sync({});
  })
  .then(function(){
    return Restaurant.sync({});
  })
  .then(function(){
    return Activity.sync({});
  })
  .then(function(){
    app.listen(3000,function(){
      console.log("Server listening at port 3000");
    });
  })
  .catch(console.error);

app.use(router);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next){
  res.status(err.status || 500);
   console.error(err);
   res.render("error");
});
