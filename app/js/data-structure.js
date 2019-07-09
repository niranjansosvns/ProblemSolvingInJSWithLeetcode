// Find pair with given sum in the array

function reverse(array) {
for (var i= 0; i <array.length/ 2; i++) {
 var other= array.length - i - 1;
 var temp= array[i];
array[i] = array[other];
 array[other] = temp;
 }
 }
a= [1,2,3,4,5];
 console.log(reverse(a));