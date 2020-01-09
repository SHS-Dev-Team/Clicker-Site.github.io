var bln = 0;
var count =0;
function changeClick(){ 
    count+=1;
    document.getElementById("count").innerHTML=count;
    if(bln==0){
        bln=1;
        document.getElementById("box").style.backgroundColor="#F5F5F5";
    }
    else{
        bln=0;
        document.getElementById("box").style.backgroundColor="#F5F5D5";
    }
}