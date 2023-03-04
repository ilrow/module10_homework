// модуль 10.3 задание 1
let a = +prompt('Введите число');

typeof a === 'number';
if (a % 2 == 0) {
  console.log('Четное');
} else if (a) {
  console.log('Нечетное' );
} else if (a = 'NaN'){
  console.log('Упс, вы ошиблись')
}