//Модуль 10 задание 2
let x = '';

switch(typeof x){
    case(x = 'number'):
    console.log('x = число')
    break;
    case(x = 'string'):
    console.log('x = строка');
    break;
    case(x = 'boolean'):
    console.log('x = логическому типу');
    break;
    default:
    console.log('значение x не определено');
}