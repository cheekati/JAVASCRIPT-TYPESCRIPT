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
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.mobile = "inokia";
        this.price = 99999;
    }
    Mobile.prototype.display = function () {
        console.log(this.mobile, this.price);
    };
    return Mobile;
}());
var newbrandi = /** @class */ (function (_super) {
    __extends(newbrandi, _super);
    function newbrandi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newbrandi.prototype.display = function () {
        this.mobile = "iphone";
        console.log(this.mobile);
    };
    return newbrandi;
}(Mobile));
var n = new newbrandi();
n.display();
