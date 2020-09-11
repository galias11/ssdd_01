/* ****************************************************************************
1- Block scope vs global scope
******************************************************************************* */

// Part 1
/*
if(true) {
  var globalVar = 1;
  let scopeVar = 1;
  console.log('Detro del block var: ', globalVar);
  console.log('Dentro del block let: ', scopeVar);
}
*/

// Part 2
/*
console.log('Fuera del block var: ', globalVar);
console.log('Fuera del block let: ', scopeVar);
*/

/* ****************************************************************************
2- Constants
******************************************************************************* */

// Part 1
/*
const constantVar = 'constant value';
let mutableVar = 'mutable var';

mutableVar = 'other value';
*/

// Part 2
/*
constantVar = 'other value';
*/

/* ****************************************************************************
3- undefined
******************************************************************************* */
/*
let nonDefined;

console.log(nonDefined);
*/

/* ****************************************************************************
4- Functions as vars
******************************************************************************* */
/*
function example(name) {
  console.log('Hello!!!, ', name);
}

const exampleAsVar = function(name) {
  console.log('Hello!!!, ', name);
}

console.log(' *************************************** ');
example('SSDD 2020');
exampleAsVar('SSDD 2020');
console.log(' *************************************** ');
*/
