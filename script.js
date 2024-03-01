var textChng = document.querySelector("h5");
var btnChng = document.querySelector("btn");
var flag = 0;
var img = document.querySelector("img");
var love = document.querySelector("i");


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

img.addEventListener("dblclick",function(){
    love.style.transform = "scale(1)";
    love.style.opacity = "1";
    love.style.transition = "all ease 0.5s";
    setTimeout(function(){
        love.style.transform = "scale(0)";
        love.style.transition = "all";
    },1000)
})