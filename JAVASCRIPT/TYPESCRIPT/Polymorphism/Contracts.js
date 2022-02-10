var CG = /** @class */ (function () {
    function CG() {
    }
    CG.prototype.display = function (x, y) {
        console.log(x, y);
    };
    return CG;
}());
var v = new CG;
v.display("hhh", "uuu");
v.display(99, 88);
v.display("ggsg", "ggg");
v.display({ name: "gg", email: 777 }, { name: "gg", email: 666 });
