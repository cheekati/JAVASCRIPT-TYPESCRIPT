class Mobile {
    mobile:string="inokia"
    price:number=99999

    display(){
        console.log(this.mobile,this.price)
    }

}

class newbrandi extends Mobile
{
    display(){
        this.mobile ="iphone"
        console.log(this.mobile)
    }
}

var n = new newbrandi()
n.display()