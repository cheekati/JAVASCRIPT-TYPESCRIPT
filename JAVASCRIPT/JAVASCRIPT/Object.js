var userInfo = {
    name:"NIT",
    city:"hyd",
    email:"ganesh@gmail.com",
    phn: 999999,
};
//Accessing the property
console.log(userInfo);
console.log(userInfo.email);
 console.log(userInfo.city);

//inserting the property
userInfo.state="TS";
userInfo.id=121;


//update the property

userInfo.state="UK";
console.log(userInfo);
delete userInfo.city;
console.log(userInfo);