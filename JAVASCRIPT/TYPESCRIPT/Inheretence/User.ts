class User{
private name:string
email:string
protected phone:number
constructor(){
this.name="ganeh"
this.email="@hhdggd@gmail"
}
ganeshDetails(){
console.log(this.name)
}
}
class Address extends User{
    id:string
    state:string
constructor(){
    super()
    this.id="hhhh"
    this.state="hyd"
    this.phone=99999
}
detailsOfme(){
console.log(this.phone)
}}

var i1=new Address()
i1.ganeshDetails()

i1.detailsOfme()