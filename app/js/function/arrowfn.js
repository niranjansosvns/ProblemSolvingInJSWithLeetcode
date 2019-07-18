var material = [
'Hydrogen',
'Helium',
'Lithium',
'Beryllium'
];
console.log(material.map(material =>material.length));
material.map((material)=>{
   return material.length;
})

function Person (){
    this.age =0 ;
    setInterval(function grownup(){
        this.age++;
    },1000)
}
var p = new Person();


function Person(){
    that= this;
    that.age = 10;
    setInterval(function(){
     that.age++;
    },1000)
}


// thorugh arrow fn
function Person(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the Person object
    }, 1000);
  }
  
  var p = new Person();