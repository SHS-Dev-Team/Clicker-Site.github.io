let count = 0;
let switch = 0;
function clicked(){
    count+=1;
    document.getElementById('count').innerHTML=count;
    if(switch==0){
        document.getElementById('box').style.backgroundColor = "black";
        meep=1;
    }
    else{
        document.getElementById('box').style.backgroundColor = "blue";
    }
}