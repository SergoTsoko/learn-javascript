"use strict"

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age;
age = +prompt("how old are you","");
// if  (age < 14 || age > 90) {
//     alert("sorry");
// }
// else{
//     alert ("hello");
// }

// Решение учебника 
// if (age >= 14 && age <= 90)


// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
if  (age < 14 || age > 90) {
    alert("sorry");
}
else{
    alert ("hello");
}
// я не понимаю как тут можно использовать !
// решение учебника
// Первый вариант:

// if (!(age >= 14 && age <= 90))

// Второй вариант:

// if (age < 14 || age > 90)

// условие задачи
// https://learn.javascript.ru/logical-operators#proverka-logina
let whoAreYou = prompt("Кто там?");
      let password;
      if (whoAreYou == "Отмена" || "" || null) {
        alert("Отменено");
      } else if (whoAreYou !== "Админ") alert("Я вас не знаю");
      else if (whoAreYou == "Админ") {
        password = prompt("Пароль?");
      }
      if (password == "Отмена") {
        alert("Отменено");
      }
      if (password !== "Я Главный") {
        alert("Неверный пароль");
      }
      if (password == "Я Главный") {
        alert("Здравствуйте!");
      }