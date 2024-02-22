let menu=document.querySelector(".menu");
let nav=document.querySelector(".nav");
let i=document.querySelector("#me");

menu.addEventListener("click",function(){
    nav.classList.toggle("active");
   
})
nav.addEventListener("click",function(){
    nav.classList.remove("active");
 
   
})
let on=document.querySelectorAll(".play");
let off=document.querySelectorAll(".pause");
let audio= new Audio("m1.mp3");
on.forEach( function (element,idx) {
   
    on[idx].addEventListener("click",function(){
    if(audio.paused){
        audio.play();
        
     console.log(on[idx]);
    }
    else{
        audio.pause();
       
    }

    })

});
