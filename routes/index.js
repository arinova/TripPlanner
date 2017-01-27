const router=require('express').Router();
var Promise=require('bluebird');

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get("/", function(req, res, next){
  var objects = {};
  Hotel.findAll({})
  .then(function(hotels) {
    objects.hotels = hotels;
    return Restaurant.findAll({});
  })
  .then(function (restaurants) {
    objects.restaurants = restaurants;
    return Activity.findAll({});
  })
  .then(function(activities) {
    objects.activities = activities;
    res.render('index', objects);
  })
  .catch(next);
});

router.post("/", function(req, res, next){
  res.json(req.body);
});

module.exports=router;
