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
var User = /** @class */ (function () {
    function User() {
        this.name = "ganeh";
        this.email = "@hhdggd@gmail";
    }
    User.prototype.ganeshDetails = function () {
        console.log(this.name);
    };
    return User;
}());
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address() {
        var _this = _super.call(this) || this;
        _this.id = "hhhh";
        _this.state = "hyd";
        _this.phone = 99999;
        return _this;
    }
    Address.prototype.detailsOfme = function () {
        console.log(this.phone);
    };
    return Address;
}(User));
var i1 = new Address();
i1.ganeshDetails();
i1.detailsOfme();
