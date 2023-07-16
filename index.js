"use strict";


const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Готово')

      reject("Error")
    }, 2000);
});

promise
.then((result) => {
  console.log(result);
})
