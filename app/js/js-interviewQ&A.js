// Passing by value and by reference

var myObject = {
  price: 20.99,
  get_price: function() {
    return this.price;
  }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log(customObject.get_price());

(function(a) {
  arguments[0] = 10;
  return a;
})(5);


function Car(color) {
  this.color = color;
}
var lada = new Car("Black");
Car.prototype.currentGear = 1;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);


var User = function() {};

User.prototype.attributes = {
  isAdmin: false
};

var admin = new User("Sam"),
  guest = new User("Bob");

admin.attributes.isAdmin = true;

// alert(admin.attributes.isAdmin);
// alert(guest.attributes.isAdmin);


var obj = {
  a: 1
};
(function(obj) {
  obj = {
    a: 2
  };
})(obj);
console.log(obj.a);

var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };

function Person(name) {
  if (name) this.options.name = name;
}

Person.prototype.options = {
  name: "Default name"
};

var foo = new Person("foo");
var bar = new Person("bar");

console.log(foo.options.name);
console.log(bar.options.name);


var a = {};

(function b ( a ) {
    a.a = 10;
    a = null;
})( a );

console.log(a);

// Closures
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

var func = [];
for (var i = 0; i < 5; i++) {
  func[i] = function() {
    console.log(i);
  };
}
func[3]();


(function() {
  var a = b = 5;
})();
console.log(b);

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

// Flow
console.log(1);
setTimeout(function() {
  console.log(2);
}, 1000);
setTimeout(function() {
  console.log(3);
}, 0);
console.log(4);



// Hoisting and types
var a = 1;
function aab() {
  a = 10;
  return;
  function a() {
  }
}
aab();
console.log(a);

var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);

console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5");


function test() {
  console.log(a);
  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }
}
test();


(function() {
  console.log(inner);
  inner();
  function inner() {
    console.log('inner');
  }
})();


// (function () {
//   alert(inner);
//   inner();
//   var inner = function() {
//     alert('inner');
//   }
// })();

// quirk

function abc(x) {
console.log(arguments)
return x
}(1, 2, 3, 4, 5)


// craking the code interview
function sum(n) {
if (n <= 0) {
 return 0;
 }
 return n + sum(n-1);
 }

 // sum(5);
 console.log(sum(5));



 function permutationstr(str) {
   permutation(str, "");
 }

 function permutation( str,  prefix) {
 if (str.length == 0) {
 console.log(prefix);
 } else {
 for ( i= 0; i < str.length; i++) {
  rem = str.substring(0, i) + str.substring(i + 1);
 permutation(rem, prefix + str.charAt(i));
 }
 }
 }

 permutationstr('verma')