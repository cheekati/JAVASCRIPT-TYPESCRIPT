class AMprotected{
    protected p1:number=909

    hen(){
        console.log(this.p1)
    }
}
class p2 extends AMprotected{
    p1=888
    childClas(){
        this.p1=22
        console.log(this.p1)
    }

}
var o= new AMprotected()
o.hen()
var y= new p2()
y.childClas()