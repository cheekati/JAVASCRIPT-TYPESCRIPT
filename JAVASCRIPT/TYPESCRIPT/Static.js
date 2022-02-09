var Mobiles = /** @class */ (function () {
    function Mobiles() {
        this.name = "samsung";
        this.name = "iphone";
        Mobiles.price = Mobiles.price + 929888;
    }
    Mobiles.prototype.print = function () {
        console.log(this.name, Mobiles.price);
    };
    Mobiles.changePrice = function () {
        Mobiles.price = 9999999;
        console.log(Mobiles.price);
    };
    Mobiles.price = 99939992;
    return Mobiles;
}());
var m1 = new Mobiles();
m1.name = "onepluse";
Mobiles.price = 92888;
m1.print();
var m2 = new Mobiles();
m2.print();
Mobiles.changePrice();
