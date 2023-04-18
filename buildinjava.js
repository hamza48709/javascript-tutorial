let nme="Hamza";
console.log(nme.concat(" khan").toUpperCase().replace(" KHAN"," ali"));
let num=5;
console.log(Number.isNaN(num));
console.log(isNaN(nme));

let a=[1,2,"hamza",4,"hamza",5];
a.forEach((v,ai)=>{
    console.log(`idnex ${ai} value is ${v}`);
})

//filter method
let r=a.filter((v)=>{
    return  v=== "hamza";

})
console.log(r);

//every :means every things is true otherwise false
let isallnumber=a.every((h)=>{
    return typeof h==="number";
})
console.log(isallnumber);
//map:change the value

let b=a.map((v)=>{
    return v+=2;
})
console.log(b);

//index find
let indexof=a.indexOf("hamza");
console.log(indexof);
//lastindexfind:!return: -1
let lastindexof=a.lastIndexOf("hamza");
console.log(lastindexof);