1
// if ("0") {
//     alert( 'Привет' );
//   }
//   // Yes


2

// let nameJava = prompt("Какое «официальное» название JavaScript?","")

// if(nameJava=="ECMAScript") alert("Верно!")
//     else alert("Не знаете? ECMAScript!")

3 
// let numberOfUser = +prompt("Enter number","")
// if(numberOfUser>0) alert(1)
//     else if(numberOfUser==0) alert(0)
// else alert(-1)

4
// let result;

// // if (a + b < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Много';
// // }

// relult = (a+b<4) ? "little": "many"


5
let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

message = (login=="Сотрудник")? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте':
(login == '') ? 'Нет логина': ''

