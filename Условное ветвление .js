"use strict";
let question = prompt("Какое «официальное» название JavaScript?", "");

if (question == "ECMAScript") {
  alert("Верно");
} else {
  alert("Не знаете? ECMAScript!");
}

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let number = prompt("write number", "");
if (number > 0){
    alert("1");
}
 else if (number < 0){
    alert ("-1");
}
else if (number == 0){
    alert("0");
}


// Перепишите конструкцию if с использованием условного оператора '?':
// Let ruslt добавил в комментах потому что иначе была ошибка в вс коде. Result обьявлялся дважди
// let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

// перепись
let result = (a + b < 4) ? "malo" : "mnogo"


// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.
let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
// Выполнение
let question2 = prompt ("who are you?");
login == (question2 == "Сотрудник") ? "Privet":
(question2 == 'Директор') ? "Здравствуйте" :
(question2 == '') ? "Нет логина" : "" ;
alert (login);

Правильно 
let message1 = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

