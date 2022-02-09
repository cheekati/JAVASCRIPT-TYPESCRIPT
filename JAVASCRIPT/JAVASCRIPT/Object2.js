var employee = {
    id: 121,
    name:"arjun",
    email:"ganesh171@gmail.com",
    address:{
        city:"mumbai",
        state:"Math",
        pincode:50055,
    },
    getData :function(){

    }

};

var company = {
    name:"ganesh",
    Dept:[{
        name:"suresh",
        TM:15
},{
    name:"privillage",
    TM:56
},{
        name:"cust",
        TM:51
    },],
};

console.log(company.Dept[2].TM)
console.log(employee.address.state);
employee.getData()