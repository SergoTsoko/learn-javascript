let i = 2;
for (; i < 12; ++i){
  if (i % 2) continue;
  alert(i);

}
// При помощи цикла for выведите чётные числа от 2 до 10.
// ответ
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

//   Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// задание:
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }

    // Мое решение:
    // let i = 0;
while (i<3){
  console.log(i);
  i++
  alert (`number${i}!`)
}

// Учебник: 
// let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number = prompt ("write number bigger then 100","")
if (number < 100 || number ==!null ){
  prompt ("write number bigger then 100","")
}
else if (number > 100) {
  alert("Well done. You are Genius)")
}

// Учебник:
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);



// https://learn.javascript.ru/while-for#vyvesti-prostye-chisla
// Не получилось сделать задание
// мой вариант
// let n = +prompt("write number", "");
// let i = 0;
// for (i; i < n; i ++);{
//  if (i % 1 == 0) 
//  alert(i);
// }