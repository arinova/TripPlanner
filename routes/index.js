const router=require('express').Router();
var Promise=require('bluebird');

var db = require('../models');
var Place = require('../models/place');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');

router.get("/", function(req, res, next){
  res.render("index");
});

router.post("/", function(req, res, next){
  res.json(req.body);
});

module.exports=router;
