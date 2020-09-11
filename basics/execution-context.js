/* ****************************************************************************
1- Hoisting & execution context
******************************************************************************* */

// part 1
/*
console.log(' *************************************** ');
console.log('Antes');
hoistingExample1('Does this work?');
console.log(hoistingExample2);

function hoistingExample1(name) {
  console.log('Hello!!!, ', name);
}
var hoistingExample2 = 'some value';

console.log('Despues');
hoistingExample1('Does this work?');
console.log(hoistingExample2);
console.log(' *************************************** ');
*/

// part 2
/*
var scopeVar = 1;

function scopeExampleA() {
  console.log('Pre: ', scopeVar);
  console.log('Pre: ', scopeVarA);
  var scopeVar = 2;
  var scopeVarA = 2;
  console.log('Post: ', scopeVar);
  console.log('Post: ', scopeVarA);
  // console.log('Post: ', scopeVarB);
}

function scopeExampleB() {
  console.log('Pre: ', scopeVar);
  console.log('Pre: ', scopeVarB);
  var scopeVar = 2;
  var scopeVarB = 2;
  console.log('Post: ', scopeVar);
  console.log('Post: ', scopeVarB);
  // console.log('Post: ', scopeVarA);
}

console.log(' *************************************** ');
console.log('Fuera: ', scopeVar);
scopeExampleA();
scopeExampleB();
console.log(' *************************************** ');
*/

// part 3
/*
console.log('Antes');
hoistingExample3('Does this work?');

var hoistingExample3 = function (name) {
  console.log('Hello!!!, ', name);
}

console.log('Despues');
hoistingExample3('Does this work?');
*/

/* ****************************************************************************
2- this
******************************************************************************* */
/*
const myObject = {
  method: function() {
    console.log(this);
  },

  crazyMethod: function() {
    return function() {
      console.log(this);
    }
  }
}

console.log(' *************************************** ');
console.log(this);
//myObject.method();
//myObject.crazyMethod()();
console.log(' *************************************** ');
*/
