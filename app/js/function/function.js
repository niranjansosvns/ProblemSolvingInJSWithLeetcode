var sum = new Function('a','b','return a*b');
console.log('sum', sum(2,3));
console.log('fn length' , sum.length);
// uses of apply

var array = ['a','b'];
var element =  [1,2,3];
array.push.apply(array,element);
console.info(array);

var numbers = [5,6,7,8,1,11];
var max = Math.max.apply(null, numbers);
console.info(max);
var min = Math.min.apply(null, numbers);
console.info(min);


//uses of bind
var module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  }
  
  var unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  var boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42

//   uses of call

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // expected output: "cheese"
  

  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }

console.log( new Food('feta', 5));
console.log( new Toy('robot', 40));

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }

  function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
  greet.call(obj);  

  