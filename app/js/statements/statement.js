
//  var and let scope
var x =2;
var y =4;
if(true){
   var x = 3;
   let y = 5;
}
console.log(x);
console.log(y);


//  break statement
// var i = 0;
// while(i < 6){
//     if(i === 3){
//     break;
//     } i= i+1;
// }

// console.log(i);

// continue statement

var text = "";

for (var i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"


//  switch statement
var expr = 'Apples';
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?");

//   switch without break statement
var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

//  default within cases
var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:  
    console.log('1');
}

export default K = 12;
// multiple cases with single operation
var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}

//  throw statement

function getrectanglearea(width, height){
    if(isNaN(width) || isNaN(height)){
        throw "Parameter is not a number!";
    }

}

try{
    getrectanglearea('a',3);
}
catch(e){
    console.log(e);
}

//  throw with object
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
 }
 function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
       'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
       return months[mo];
    } else {
       throw new UserException('InvalidMonthNo');
    }
 }
 
 try {
    // statements to try
    var myMonth = 15; // 15 is out of bound to raise the exception
    var monthName = getMonthName(myMonth);
 } catch (e) {
    monthName = 'unknown';
    console.log(e.message, e.name); // pass exception object to err handler
 }


//  try catch 
try {
    try {
      throw new Error('oops');
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "finally"
  // "outer" "oops" 

// Now, if we already caught the exception in the inner try-block by adding a catch block
  try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "inner" "oops"
  // "finally"

//   And now, let's re-throw the error.
try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
  
  // Output:
  // "inner" "oops"
  // "finally"
  // "outer" "oops"

//    return from finally block

(function() {
    try {
      try {
        throw new Error('oops');
      }
      catch (ex) {
        console.error('inner', ex.message);
        throw ex;
      }
      finally {
        console.log('finally');
        return;
      }
    }
    catch (ex) {
      console.error('outer', ex.message);
    }
  })();
  
  // Output:
  // "inner" "oops"
  // "finally"

//   var statement
var x = 1;
if(x === 1){
    var x = 2;
    console.log(x);

}
console.log(x);