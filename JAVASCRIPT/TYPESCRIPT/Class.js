class Student{
    name="ganesh";
    city="hyd"
    GetDetails(){
        console.log(this.name);
        console.log(this.city);
    }
}
var s1 =new Student();
s1.GetDetails();

var s2= new Student();
s2.name ="narsh";
s2.GetDetails();