//logic is use to make decision
let israin=false;
if(israin){
    console.log("today is hollyday due to rain");
}
else{
    console.log("woprking day plz come to office");
}

//grade
let score=50;
let grade;
if(score >=80){
    grade="A";
}
else if(score>=60 && score<80){
    grade="B";
}
else if(score>=50 && score<60){
    grade="C";
}
else{
    grade="F";
}
console.log(grade);

switch(grade){
    case "A":
        console.log("Excellent ");
        break
    case "B":
        console.log("GOod");
        break
    case "C":
        console.log("normal");
        break
    case "F":
        console.log("GOod");
        break
    default:
        console.log("not given exam");
        break

}