let user=["hamza","javed","ali","nadeem"];
console.log(user);
console.log(user[0]);
console.log(user.length);
let totalindex=user.length-1;
console.log(totalindex);
user[0]="khizer";
console.log(user);
console.log(user[-1],user[6]);
//add element in end of array;
user.push("saleem");
console.log(user);
//add elemet in start
user.unshift("umer");
console.log(user);

//delete element in end
user.pop();
console.log(user);
//delete element in start
user.shift();
console.log(user);

//add item in the center of array
let no=[1,2,3,4,5,6,7,8,9];
no.splice(2,0,5);//index,no of delete  item,add items
console.log(no);
//delete item in the center
let deleteitem=no.splice(2,2);
console.log(no);
console.log("item deleted :",deleteitem);
deleteitem.map(item=>{
    console.log(item);
})
//finding elements in array
let no4=[4,5,8];
let findno8=no4.find((item)=>{
    return item==8;
})
console.log("element is find "+findno8);

//find index of element return -1 when elemnt not present
let indexof8=no4.indexOf(8);
console.log(indexof8);

//sort  element
let nam=["hamza","javed","ali","bilal"];
let age=[25,21,31,50,20];
let sortage=age.sort();
let sortname=nam.sort();
console.log(sortname);
console.log(age);

//reverse  things
let reverseage=age.reverse();
console.log(reverseage);

let twoDarray=[[1,2,3],
[4,5,6],
[7,8,9]];
console.log(twoDarray[0][0]);



