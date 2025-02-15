// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }

//   // Нет отличий


  
//   function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
//   }


//   function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }


//   function min(a,b){
//     return (a>b)? alert(b):alert(a)
//   }

//   min(-1,1)


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
    alert(`no ${n}`);
  }