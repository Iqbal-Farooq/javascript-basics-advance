
// currying iin js
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var res=sum(9)(2)(3);
console.log(res);


// 
function mul(x,y){
    console.log(x*y);
}
var res=mul.bind(this,2)
res(3);