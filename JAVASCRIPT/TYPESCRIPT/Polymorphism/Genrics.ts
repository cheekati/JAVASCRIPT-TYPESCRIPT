class StudentInfo{

    display<T>(name:T,city:T):void{
        console.log(name,city)

    }
}

var s1= new StudentInfo()
s1.display("hhh","jjj")
s1.display(333,222)
s1.display(99,66)
s1.display(true,true)