// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

const user = {
    name: "John"
};
  
// Работает!
user.name = "Pete";
  
// Ошибка
user = 123;


function claculateSumSalaries(obj) {
    let sum = 0;
    for (let key in obj) {
       sum+=obj[key];
    }
    return sum;
  }


  function multiplyNumeric(obj) {
    
    for (let key in obj) {
        if(typeof obj[key] == 'number'){
            obj[key]*=obj[key];
        }
    }
  }