let x=Math.random();
let y=Math.random();
if(x<1)
x*=100;
if(y<1)
y*=100;
x=Math.floor(x);
y=Math.floor(y);

    if(x>6){
        x%=6;
    x++;
    }
      if(y>6){
        y%=6;
        y++;
    }
console.log(x)
console.log(y)
if(x>y)
document.querySelector("h1").innerHTML="Player 1 wins"
if(x==y)
document.querySelector("h1").innerHTML="Its a draw"
if(x<y)
document.querySelector("h1").innerHTML="Player 2 wins"


//how to change an attribute inside any tag
var randomDiceImageX="images/dice"+x+".png"

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageX)

var randomDiceImageY="images/dice"+y+".png"

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImageY)