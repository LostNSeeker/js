// $(document).ready(function(){
    
//     $("h1").css("color","red")
// })

// $("h1").css("color","red");
   
$("h1").addClass("btitle margin-50");

$("button").text("bksd")

$("button").html("<em> Hey </em>")

$("a").attr("href","https://www.yahoo.com")
  
for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // document.querySelector("h1").style.color="purple"
        // $("h1").hide();
        // $("h1").fadeOut();
        // $("h1").fadeIn();
        // $("h1").fadeToggle();

        // $("h1").slideUp();
        // $("h1").slideDown();
        // $("h1").slideUp().slideDown().animate({opacity:0.5});

    });
}

$("input").keypress(function(event){
console.log(event.key)
var ki = event.key
$("h1").text(event.key) 
})


$("h1").on("mouseover",function(){
    $("h1").css("color","green")
})

// $("h1").before("<button>New</button");
// $("h1").after("<button>New</button");
// $("h1").prepend("<button>New</button");
// $("h1").append("<button>New</button");

// $("button").remove()

