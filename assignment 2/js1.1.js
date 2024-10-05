// 1 task

let restaurant = {};

restaurant.name = 'Bistro Bliss';
restaurant.address = 'улица Ленина, 12';
restaurant.rating = 4.5;
restaurant.isOpen = true;
restaurant.phone = undefined;

restaurant['menu'] = ['бургеры', 'паста', 'салаты'];
restaurant['workingHours'] = 'с 10:00 до 22:00';

delete restaurant.phone;

console.log(restaurant);