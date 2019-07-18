function myfunc(myObj){
    myObj.brand = 'toyata';
}

var mycar = {
    brand: 'Honda',
    year: 1989,
    model: 'Accord',
}

console.log(mycar.brand);

myfunc(mycar);
console.log(mycar.brand);

var newfunc = function(){
    console.log('new func');
}

var namedfunc = function named(){
    console.log('named function ');
}

var multiply = new Function('x', 'y', 'return x * y');
function multiply(x, y){
    return x*y;
}
var multiply = function(x,y){
    return x*y;
}
var multiply = function multi(x, y){
    return x*y;
}


foo();
function foo(){
 console.log('Foo!');
}


// constructor does not inherit any scope other than the global scope
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

// funciton declaration 
function foo() {}
// function expression
(function foo(){})
// function expression 
x= function foo () {}

if(x){
//  function expression
    function foo () {} }

// function declartion 
function a(){
    function b() {}
    // function expression
    if(0){
        function c() {}
    }
}

'use strict '

function f(){
    return 1;
}

{ 

    function f() {
        return 2
    }
}

console.log(f()===1);
console.log(f()=== 2);

// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
    var numStr = num.toString();             // Initialize return value as string
    var numZeros = totalLen - numStr.length; // Calculate no. of zeros
    for (var i = 1; i <= numZeros; i++) {
       numStr = "0" + numStr;
    }
    return numStr;
 }
 var result;
 result = padZeros(42,4); // returns "0042"
 console.log(result);
 result = padZeros(42,2); // returns "42"
 console.log(result);
 result = padZeros(5,4);  // returns "0005"
 console.log(result);

 if ('function' === typeof window.padZeros) {
   console.log('function is exist')
  } else {
    console.log('function is not exist')
}

function calrect(width,height){
    return width* height;
}
console.log(calrect(5,6));

// hosting 

hosted();
function hosted(){
    console.log('fn hosted');
}

// notHosted(); 
notHosted = function(){
    console.log('fn not hosted');
}

calSquare = function (side){
    return side*side;
}
console.log(calSquare(4));


var fact = {
    "factIt" : function fact(n){
        if(n<1)
        return 1;
        else{
        return n*fact(n-1);
        }
    }
};
console.log(fact.factIt(3));