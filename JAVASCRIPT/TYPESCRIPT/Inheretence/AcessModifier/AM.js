var A1 = /** @class */ (function () {
    function A1() {
        this.pen = 999;
        this.paper = 9;
    }
    A1.prototype.PP = function () {
        console.log(this.paper);
    };
    return A1;
}());
var k = new A1;
k.PP();
