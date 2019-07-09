var a = new Array();
a.push('niranjan');
a.push('verma');
a.push('Mr.');
console.log(a);
// console.log(a.length);
// console.log(a.size());
// console.log(a[0].toUpperCase());

var b = ['a', 'b',4];
console.log(b);
b[100]= 'd';
console.log(b.length);
// console.log(a[99]);

// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// for(var name of b){
//     console.log(name);
// }

// for(var name in b){
//     console.log(name);
// }

a.forEach(function(value, index , Array){
    console.log(value);
    console.log(index);
})

console.log(a.toString());
console.log(a.toLocaleString());
console.log(a.concat(b));
console.log(a.join(', '));
console.log(a.push('cosmos'));
console.log(a);
console.log(a.pop());
console.log(a.reverse());
console.log(a.shift());
console.log(a.slice(1,2));
console.log(a.sort());
