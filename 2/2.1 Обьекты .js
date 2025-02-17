// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// мое решение
let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name
console.log (user);

учебник
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// https://learn.javascript.ru/object#summa-svoystv-obekta
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  function salariesTotal() {
    let sum = 0; 
  
    for (let key in salaries) {
      sum += salaries[key];
    }
  
    console.log(sum); 
    return sum; 
  }
  salariesTotal(); 


//   Мое решение с помощью чатДЖПТ
//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
  function salariesTotal() {
    let sum = 0; 
  
    for (let key in salaries) {
      sum += salaries[key];
    }
  
    console.log(sum); 
    return sum; 
  }
  salariesTotal(); 




  // Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
  // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

// Потратил на эту задачу наверное больше всего времени и вот мое решение
// под конец уже начал спрашивать у чата и в итоге оно помогло, сам не додумался 

 menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  
  for (let key in menu) { 
    if (typeof menu[key] === "number") { 
      menu[key] *= 2; 
    }
  }
}
multiplyNumeric(menu);
console.log (menu);

// решение учебника
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

