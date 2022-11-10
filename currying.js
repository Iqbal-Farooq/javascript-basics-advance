function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var res=sum(9)(2)(3);
console.log(res);


// multiply
function mul(x,y){
    console.log(x*y);
}
var res=mul.bind(this,2)
res(3);

// new example;
var adds=function(a){
    return function(b){
        return function(c){
            return a+b+c
        }
        
          
        
    }
}
var Add1=adds(8);
var Add3=Add1(4);
var Add4=Add3(5);
console.log(Add4);

// or we can directly print like this
console.log(adds(2)(7)(9));