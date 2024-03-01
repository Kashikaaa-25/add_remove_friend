var textChng = document.querySelector("h5");
var btnChng = document.querySelector("btn");
var flag = 0;

btnChng.addEventListener("click",function(){
    if(flag==0){
        textChng.innerHTML = "Friends";
        textChng.style.color = "green";
        btnChng.innerHTML = "Remove";
        flag=1;
    }
    else{
        textChng.innerHTML = "Stranger";
        textChng.style.color = "red";
        btnChng.innerHTML = "Add Friend"
        flag=0;
    }

})