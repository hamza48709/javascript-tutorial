let arr=[1,2,3];
console.log(typeof arr);

let user={
    name:"hamza",
    age:23,
    languages:["urdu","pashto","hindko"],
    ismarried:false,
    address:{
        street:"dub no 1",
        city:"Mansehra",
        country:"pakistan",
        postalcode:"21700",

    }
};
console.log(user);
//print elements in console
console.log(user.name);
console.log(user["citizen"]);
console.log(user["age"]);
console.log(user["address"].street);




user.languages.map((e)=>{
    console.log(e);

})

//update object
user.name="javed";
user["age"]=55;
console.log(user);