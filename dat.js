let currenttime=new Date();//not build-in method but constructor
console.log(currenttime);
let curdat=Date.now();//time in second starting  from 1 jan 1970
console.log(curdat);
let cudat=new Date(1000);//add 1000 milli second in unix time
console.log(cudat);
let d=new Date();
console.log(d.getTime());
console.log(d.getDate());
console.log(d.getFullYear());
d.setFullYear(2010);//change year
console.log(d.getFullYear());

console.log(d.toDateString());//change date  into string
console.log(d.toLocaleDateString());


//example:count-down counter
let da=new Date();
let cur=da.toTimeString();
let countdown;
let enddate=da.toTimeString("11:56:15 GMT+0500");
console.log(enddate);
function countDOwn(){
    countdown=enddate-cur;
    console.log(countdown);
}
countDOwn();