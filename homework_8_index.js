// модуль 10 задание 8
let myMap = new Map();

myMap.set('country', 'USA');
myMap.set('state','Nevada');
myMap.set('city', 'Las-Vegas');
myMap.set('population','2,227,053');


myMap.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
})
