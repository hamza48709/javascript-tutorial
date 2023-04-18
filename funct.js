function whatIsYourName(){
    var name="Hamza";
    console.log(name);
}
whatIsYourName();


//funnction return only one value 
function nameIs(){
    return "Javed";

}
let usernameis=nameIs();
console.log(usernameis);

//default parameter
function yourNameIs(firstname="hamza",lastname="khan"){
    console.log(firstname,lastname);

}
yourNameIs("javed","nadeem");
yourNameIs("javed");
yourNameIs();

//arrow  function
let nme=(yourname)=>{
    console.log(yourname);

}
nme("khurrum");
//use arrow function in build-in function
let gender=["male","female","shemale"];
gender.forEach(e=>{
    console.log("msotly gender is:"+e);
})
