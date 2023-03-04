// молдуль 10 задание 6
let arr = [3, 5, 'hello', 2, 6, 7, '10'];
for(let i = 0; i < arr.length; i++){
  if(typeof arr[i] === typeof 1 ){
    console.log(`${arr[i]} true`)
  } else {
    console.log(`${arr[i]} false`)
  }
}