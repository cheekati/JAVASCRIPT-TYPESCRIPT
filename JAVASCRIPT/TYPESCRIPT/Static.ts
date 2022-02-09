class Mobiles{
    name:string="samsung"
    static price:number=99939992
    constructor(){
        this.name="iphone"
        Mobiles.price =Mobiles.price+929888

    }
    print():void{
        console.log(this.name,Mobiles.price)
    }
    static changePrice(){
        Mobiles.price=9999999
        console.log(Mobiles.price)
    }

}
var m1= new Mobiles()
m1.name="onepluse"
Mobiles.price= 92888
m1.print()

var m2=new Mobiles()
m2.print()
Mobiles.changePrice()

