var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.display = function (name, city) {
        console.log(name, city);
    };
    return StudentInfo;
}());
var s1 = new StudentInfo();
s1.display("hhh", "jjj");
s1.display(333, 222);
s1.display(99, 66);
s1.display(true, true);
