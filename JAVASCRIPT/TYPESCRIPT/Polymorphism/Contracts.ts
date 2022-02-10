interface StudentDetails{
    name:string
    email:number
    
}
class CG
{
    display<StudentDetails>(x:StudentDetails,y:StudentDetails){
        console.log(x,y)
    }
}

var v = new CG
v.display("hhh","uuu")
v.display(99,88)
v.display<string>("ggsg","ggg")
v.display<StudentDetails>({name:"gg",email:777},{name:"gg",email:666})