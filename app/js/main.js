function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

function clickCounter() {
  if(typeof (Storage)!== "undefined"){
    if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}
document.getElementById("storageId").innerHTML = "You have clicked the button " +
localStorage.clickcount + " time(s).";

  }
  else{
    alert("does not support");
  }
  // body...
}

includeHTML();

function add(runningTotal, currentValue) {
return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum); // displays 55

function square(num) {
console.log(num, num * num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

Array.matrix = function(numrows, numcols, initial) {
var arr = [];
for (var i = 0; i < numrows; ++i) {
var columns = [];
for (var j = 0; j < numcols; ++j) {
columns[j] = initial;
}
arr[i] = columns;
}
return arr;
}

var nums = Array.matrix(5,5,0);
console.log(nums[1][1]); // displays 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
console.log(names[1][2]); // display "Joe"

var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
for (var col = 0; col < grades[row].length; ++col) {
total += grades[row][col];
}
average = total / grades[row].length;
console.log("Student " + parseInt(row+1) + " average: " +
average.toFixed(2));
total = 0;
average = 0.0;
}

// List implimentation
function List() {
this.listSize = 0;
this.pos = 0;
this.dataStore = []; // initializes an empty array to store list elements
this.clear = clear;
this.find = find;
this.toString = toString;
this.insert = insert;
this.append = append;
this.remove = remove;
this.front = front;
this.end = end;
this.prev = prev;
this.next = next;
this.length = length;
this.currPos = currPos;
this.moveTo = moveTo;
this.getElement = getElement;
this.length = length;
this.contains = contains;
}
// Append: Adding an Element to a List
function append(element) {
this.dataStore[this.listSize++] = element;
}

// Remove: Removing an Element from a List

function find(element) {
for (var i = 0; i < this.dataStore.length; ++i) {
if (this.dataStore[i] == element) {
return i;
}
}
return -1;
}

// Find: Finding an Element in a List

function remove(element) {
var foundAt = this.find(element);
if (foundAt > -1) {
this.dataStore.splice(foundAt,1);
--this.listSize;
return true;
}
return false;
}


// Length: Determining the Number of Elements in a List
function length() {
return this.listSize;
}

// toString: Retrieving a List’s Elements
function toString() {
return this.dataStore;
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());


// Insert: Inserting an Element into a List
function insert(element, after) {
var insertPos = this.find(after);
if (insertPos > -1) {
this.dataStore.splice(insertPos+1, 0, element);
++this.listSize;
return true;
}
return false;
}

// Clear: Removing All Elements from a List

function clear() {
delete this.dataStore;
this.dataStore = [];
this.listSize = this.pos = 0;
}

// Contains: Determining if a Given Value Is in a List

function contains(element) {
for (var i = 0; i < this.dataStore.length; ++i) {
if (this.dataStore[i] == element) {
return true;
}
}
return false;
}

// Traversing a List
function front() {
this.pos = 0;
}
function end() {
this.pos = this.listSize-1;
}
function prev() {
if (this.pos > 0) {
--this.pos;
}
}
function next() {
if (this.pos < this.listSize-1) {
++this.pos;
}
}
function currPos() {
return this.pos;
}
function moveTo(position) {
this.pos = position;
}
function getElement() {
return this.dataStore[this.pos];
}

// for(names.front(); names.currPos() < names.length(); names.next()) {
// print(names.getElement());
// }

//  stack


function Stack() {
this.dataStore = [];
this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
}

function push(element) {
this.dataStore[this.top++] = element;
}

function pop() {
return this.dataStore[--this.top];
}

function peek() {
return this.dataStore[this.top-1];
}

function length() {
return this.top;
}

function clear() {
this.top = 0;
}

// 

function Stack() {
this.dataStore = [];
this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
this.clear = clear;
this.length = length;
}
function push(element) {
this.dataStore[this.top++] = element;
}
function peek() {
return this.dataStore[this.top-1];
}
function pop() {
return this.dataStore[--this.top];
}
function clear() {
this.top = 0;
}
function length() {
return this.top;
}
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());
