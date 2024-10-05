// 2 task

let vehicle = {}; 
vehicle.brandName = 'BMW'; 
vehicle.model = 'X5'; 
vehicle.model = 'M1'; 
console.log(vehicle.brandName, vehicle.model)
delete vehicle.model; 
console.log(vehicle.brandName, vehicle.model)