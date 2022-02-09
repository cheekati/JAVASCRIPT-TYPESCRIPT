var obj={
    a:100,
}
var obj1={
    a:900,
}
var obj3={
    a:9,
}
function fn(x,y){
    var b=x;
    var c=y;
    var r=this.a+b+c;
    console.log(r);
}
fn.call(obj,9,0);
fn.call(obj1,8,9);
fn.apply(obj3,[99,88]);

var fn1= fn.bind(obj);
fn1(77,99);
fn.bind(obj,99,99)();
fn.bind(obj3)(99,00);
