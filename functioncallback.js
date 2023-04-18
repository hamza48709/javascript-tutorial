//function pass in arguments
function getgreat(){
    let score=75;
    let grade;
    if(score>80){
        grade="A";
    }
    else if(score>70 && score <=79){
        grade="B";
    }
    else if(score>60 && score <=69){
        grade="C";
    }
    else if(score>=50 && score <=59){
        grade="C";
    }
    else{
        grade="F";
    }

    return grade;
      
}

function reward(callback){
    switch(callback()){
    case "A":
        console.log(`excellent your score is ${callback()}`);
        break;
     case "B":
        console.log(`very good your score is ${callback()}`);
        break;
        case "C":
        console.log(`good your score is ${callback()}`);
        break;
        case "D":
        console.log(`normal your score is ${callback()}`);
        break;
        case "F":
        console.log(`failed your score is ${callback()}`);
        break;
    }

}
reward(getgreat);