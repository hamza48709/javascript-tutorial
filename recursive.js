//recursive function :function call again inside  that  function

function getrecursive(no){
    if(no>0){
        console.log(no);
        getrecursive(--no);
    }

}
getrecursive(5);
