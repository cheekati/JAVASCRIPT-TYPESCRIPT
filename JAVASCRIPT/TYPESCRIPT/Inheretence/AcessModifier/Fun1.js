"use strict";
exports.__esModule = true;
exports.name = exports.city = exports.fun1 = void 0;
function fun1() {
    console.log("function1 is calling");
}
exports.fun1 = fun1;
exports.city = "jaipur";
function name(n) {
    console.log(n);
}
exports.name = name;
fun1();
