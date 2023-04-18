//use for itteration
//while loop

let i=0;
while(i<10){
    console.log(i);
    i++;
}
console.log("end because it reach to "+i);

//
let nme=["hamza","javed","aslam","khizer","umer"];
let namenotfind=true;
while(namenotfind && nme.length>0 ){
    if(nme[0]==="aslam"){
        console.log("name is founded");
        namenotfind=false;
    }
    else{
        nme.shift();
    }
}
console.log(namenotfind);

//fibnacci series
let fubnacci=[];
let no1=0;let no2=1; let temp;
while(fubnacci.length!=20){
    fubnacci.push(no1);
    temp=no1+no2;
    no1=no2;
    no2=temp;

}
console.log(fubnacci);

//dowhile


let no =5;
do{
    console.log(no);
    no--;

}while(no!=0);


//fibnocci series using do while
let fib=[];
let noo1=0;let noo2=1;
let tempp;
do{
    fib.push(noo1);
    tempp=noo1+noo2;
    noo1=noo2;
    noo2=tempp;
}while(fib.length!=10);
console.log(fib);



//whileloop
for(let  i=0;i<5;i++){
    console.log(i);
}

//insert value in array using loop
let insertarr=[];
for(let i=0;i<=5;i++){
    insertarr.push(i);
}
console.log("data inserted");
//itterate array values using loop  once
for(let i=0;i<insertarr.length;i++){
    console.table(insertarr[i]);
    
}

//practsie
let nm=["hamza","javed","ali"];
for(let i=0;i<nm.length;i++){
    if(nm[i].startsWith("j")){
        delete nm[i];
        continue;
    }
    nm[i]="hello"+nm[i];
}
console.log(nm);

//for-of loop
for(let names of nm){
    console.log(names);
}

//for-in loop for object
let user={
    nm:"hamza",
    age:23,
    status:"married"
}
for(let prop in user){
    console.log(user[prop]);
    console.log(prop);
}