'use strict';
console.log('break.js');

// break
// continue

// sukuriam cikla kuris tesiasi 20 kartu
// ciklas turetu sustoti jei prasisuko daugiau nei 10 kartu

// for(let i=1; i<=20; i++){
//     console.log('i ===', i);
//     if(i===10){
//         console.log('jau buvo 10 ciklu');
//         break;
//     }
// }

//sukuriam cikla kuris tesiasi 20 kartu
// nespausdinti skaiciaus 17

// for (let i = 1; i <= 20; i++) {
//     if (i === 17) {    
//   continue;
// }
// console.log(i);
//   }

  for (let i = 1; i <= 20; i++) {
    if (i === 4)
    continue;
    if (i === 15)
    continue;
    if (i === 17)   
  continue;
console.log(i);
  }