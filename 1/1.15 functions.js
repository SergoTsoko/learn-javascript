// https://learn.javascript.ru/function-basics#perepishite-funktsiyu-ispolzuya-operator-ili


// мое решение
let age = +prompt("how old are you?", "");

function checkAge(age) {
  let access = age >= 18 ? true : confirm('Родители разрешили?'); 
  return access; 
}

alert(checkAge(age));

// учебник
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}



// след задание 
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// мое решение 
let a = +prompt ("number","");
  let b = +prompt("number for b", "");
function min(a,b){
  return checking = (a > b) ? alert(a) : alert(b);
}
 (min(a,b)); 
//  учебник

//  Вариант решения с использованием if:

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
// Вариант решения с оператором ?:

function min(a, b) {
  return a < b ? a : b;
}



// https://learn.javascript.ru/function-basics#funktsiya-pow-x-n


// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// мое решение

// let x = +prompt ("x?","");
//   let n = +prompt("n?", "");
// function pow(a,b){
//   return checking = x ** n;
// }
//  alert(pow(a,b)); 

//  учебник

 function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n >= 1 && n % 1 == 0) {
    alert( pow(x, n) );
  } else {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  }


//   я тут не совсем понял что происходит, думаю что это не очень важная деталь.
//    Но если это не так и мне нужно его знать
//   скажи и я вернусь к этому вопросу


// https://learn.javascript.ru/arrow-functions-basics#perepishite-s-ispolzovaniem-funktsii-strelki
// Стрелочные функции 
// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

// мое решение
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."); },
//     () => alert("Вы отменили выполнение."); }
//   );

//   учебник
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
  

  let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
let clone = user;
console.log (clone)[keys]; 