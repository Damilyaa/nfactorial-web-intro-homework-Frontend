// 1 task

let restaurant = {};

restaurant.name = "Damilya's restaurent";
restaurant.address = 'Dami 1a';
restaurant.rating = 5.0;
restaurant.badRevew = "не вкусные слойки :c";
restaurant.isGood = true;
restaurant.badFood = undefined;

restaurant['menu'] = ['пончик', 'слойка с яблоком', 'фруктовый тортик'];
delete restaurant.BadRevew;

console.log(restaurant);