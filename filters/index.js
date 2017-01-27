module.exports = function(env) {
  var hotelName = function (hotel) {
    return hotel.name;
  };

  hotelName.safe = true;

  env.addFilter('hotelName', hotelName);


  var restaurantName = function (restaurant) {
    return restaurant.name;
  };

  restaurantName.safe = true;

  env.addFilter('restaurantName', restaurantName);


  var activityName = function (activity) {
    return activity.name;
  };

  activityName.safe = true;

  env.addFilter('activityName', activityName);

}
