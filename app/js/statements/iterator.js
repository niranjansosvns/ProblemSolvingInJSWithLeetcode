import m from '.app/statements/statement.js';
console.log(m);


var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i > 0 && i < 5); // Despite i == 0 this will still loop as it starts off without the test
document.getElementById('example').innerHTML = result;


//  for statement

var str = "";

for (var i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"

// normal for statement
for (let i = 0; i < 9; i++) {
    console.log(i);
    // more statements
 }

// initialization is optional in for statement
 var i = 0;
 for (; i < 9; i++) {
     console.log(i);
     // more statements
 }

//condition is optional in for statement but make sure that it used break statement
 for (let i = 0;; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
 }

//  every declartion in for statement is optional and but make sure to use is break statement 
 var i = 0;
 
 for (;;) {
   if (i > 3) break;
   console.log(i);
   i++;
 }


//   for in statement
var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};

for (var item in obj) {
  sum += obj[item];
}

console.log(sum); // logs "26", which is 5+13+8


var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
console.log(`obj.${prop} = ${obj[prop]}`);
}

// for of statements
var iterable = [10,20, 30];
for (const value of iterable){
    console.log(value);
}

// iterate over a string 
var iterableString = 'Niranjan'
for (let s of iterableString){
    console.log(s);
}

// iterating over a map
let iterateonmap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of iterateonmap){
    console.log(entry);
}

for ([key, value] of iterateonmap){
    console.log(value);
}

// iterating over a set
let iterableSet = new Set([1, 1, 2, 2, 3, 3]);
for (let value of iterableSet){
    console.log(value);
}

//  for wait of statement
//  while loop

    var n=0;
    while(n < 3){
        n++
    }
    console.log(n);


    //  debugger statement
    function debuggerStatement (){
        debugger;
        console.log('debugger');
    }

//  export statement
