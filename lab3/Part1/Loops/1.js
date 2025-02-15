// let i = 3;

// while (i) {
//   alert( i-- );
// } // 1

// let i = 0;
// while (++i < 5) alert( i ); // 1,2,3,4

// i = 0;
// while (i++ < 5) alert( i ); // 1,2,3,4,5


// for (let i = 0; i < 5; i++) alert( i ); // 0,1,2,3,4

// for (let i = 0; i < 5; ++i) alert( i ); //0,1,2,3,4

// for(let i=2;i<=10;i+=2) alert(i)


// for (let i = 0; i < 3; i++) {
//      alert( `number ${i}!` );
//     }
// let i=0
// while(i<3) {
//     alert( `number ${i}!` );
//     i++
// }

// while(true){
//     let userNumber = prompt("Enter a number greater than 100","")
//     if(userNumber>=100 || userNumber===null){
//         break;
//     }
// }

let interval = prompt("interval","")

nextPrime:
for(let i=2;i<=interval;i++){
    for(let j=2;j<i;j++){
        if(i%j==0) continue nextPrime;
    }
    alert(i);
}

