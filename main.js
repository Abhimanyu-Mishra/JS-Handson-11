function abhi(){
    console.log('hello');
}

function sum (a,b){
    a+b;
}

const fun1 = (() =>{
   console.log('welcome')
})


var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();


var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};



var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

function factorial(n){
    let fact = 1;
    for(i=n; i>=1; i--){
        fact*(-1);
    }
    return fact;
}
console.log(factorial(8));
