// alert("hi")
// document.querySelector(".set button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("I got click");
// }
// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("i got clicked");
//     })//another way
// }
// document.querySelector("button.a").addEventListener("click",handleClick)

// function handleClick(){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// }

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
       this.style.color="white";
       switch(this.innerHTML)
       {
           case "w":
               var audio = new Audio("sounds/tom-1.mp3")
               audio.play();
               break;    
               
               case "a":
                   var audio = new Audio("sounds/tom-2.mp3")
                   audio.play();
                   break;    
                   
                   case "s":
                       var audio = new Audio("sounds/tom-3.mp3")
                       audio.play();
                       break;    
                       
                       case "d":
                           var audio = new Audio("sounds/tom-4.mp3")
                           audio.play();
                           break;    
                           
                           case "j":
                               var audio = new Audio("sounds/crash.mp3")
                               audio.play();
                               break;    
                               
                               case "k":
                                   var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;    
            
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;    
        }      
    })
    }