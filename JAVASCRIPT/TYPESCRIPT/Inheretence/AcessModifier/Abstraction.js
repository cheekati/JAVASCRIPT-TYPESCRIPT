var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProductTemplete = /** @class */ (function () {
    function ProductTemplete() {
        this.name = "";
        this.price = 0;
        this.Quantity = 0;
    }
    ProductTemplete.prototype.Total = function () {
        return this.price * this.Quantity;
    };
    return ProductTemplete;
}());
var Mobile = /** @class */ (function (_super) {
    __extends(Mobile, _super);
    function Mobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Iphone";
        _this.price = 888;
        _this.Quantity = 999;
        return _this;
    }
    Mobile.prototype.Print = function () {
        console.log("Mobile name is:".concat(this.name));
    };
    return Mobile;
}(ProductTemplete));
var Tv = /** @class */ (function (_super) {
    __extends(Tv, _super);
    function Tv() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Samsung7";
        return _this;
    }
    Tv.prototype.Print = function () {
        console.log("TV name is:".concat(this.name));
    };
    return Tv;
}(ProductTemplete));
var c1 = new Tv();
c1.Print();
