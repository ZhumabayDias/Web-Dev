// alert( null || 2 || undefined ); //2

// alert( alert(1) || 2 || alert(3) ); //1 , 2

// alert( 1 && null && 2 ); //null

// alert( alert(1) && alert(2) ); //1 , undefined

// alert( null || 2 && 3 || 4 ); //3

// let value = NaN;

// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;

// alert(value); //30

// let age
// if( age>= 14 && age<=90){
//     alert("Good")
// }


// if (age < 14 && age>90 ){
//     alert("Good")
// }


// if (!(age >= 14 && age<=90 )){
//     alert("Good")
// }

// if (-1 || 0) alert( 'first' ); //first
// if (-1 && 0) alert( 'second' ); 
// if (null || -1 && 1) alert( 'third' ); //third



// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».
let login = prompt("Enter login","")
if(login=="Admin") {
    let password=prompt("Enter password","")
    if("I'm a boss"==password) alert("Hello")
        else if(login=='' || login=== null) alert("Cancel")
        else alert("Wrong password")

}
else if(login=='' || login==null) alert("Cancel")
else alert("I do not know")