abstract class ProductTemplete {
    name:string=""
    price:number=0
    Quantity:number=0

   
    
    Total():number{
        return this.price*this.Quantity
}
abstract Print():void
        
}

class Mobile extends ProductTemplete{
    name="Iphone"
    price=888
    Quantity=999
    Print() {
        console.log(`Mobile name is:${this.name}`)
    }
}

class Tv extends ProductTemplete{
    name="Samsung7"
        Print(){
            console.log(`TV name is:${this.name}`)
        }}


        var c1 = new Tv()
        c1.Print()