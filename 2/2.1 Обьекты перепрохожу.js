Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

мое решение
let user = {};
  user.name = 'John';
  user.surname = 'Smith';
  user.name = 'Pete';
  delete user.name;

  учебник
  let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

!! РЕШЕНИЯ СОВПАДАЮТ




Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

что написал я, но не работало правильно. Вовращало false когда объект не пустой,
но не возвращает true когда обьект пустой. 
let schedule = {};
  
function isEmpty(schedule){
  if (schedule !== null && schedule !== undefined){
    return false;
    alert ( isEmpty(schedule) );
  }
  else if ((schedule === null || schedule === undefined)){
    return true;
  }
}
isEmpty(schedule);
schedule["8:30"] = "get up";
isEmpty(schedule);


что написал мне чат

let schedule = {};    

function isEmpty(schedule) {  
    return Object.keys(schedule).length === 0; 
} 

alert(isEmpty(schedule)); 

schedule["8:30"] = "get up"; 

alert(isEmpty(schedule)); 
alert(schedule["8:30"]);



решение учебника

function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
