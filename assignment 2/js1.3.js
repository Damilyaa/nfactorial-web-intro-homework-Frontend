// 3 task

let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  console.log(`total salary: ${sum}`);