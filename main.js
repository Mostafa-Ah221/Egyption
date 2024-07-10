$(document).ready(function(){
    //====================================script section head===========================//
    $(".openNav").click(function(){
      $("#leftMenu").css({
            "width": "250px" 
        });
        $("#home-content").css({
            "margin-left": "250px"
        })
       
    });
    $(".closebtn").click(function(){
         $("#leftMenu").css({
            "width": "0px" 
        });
         $("#home-content").css({
            "margin-left": "0px"
        })
    })
    //============================================script sction slides(n)==================================//
 $(".toggle").click(function(){
        var $inner = $(this).next(".inner");
        $inner.slideDown();
        $(this).siblings(".toggle").each(function(){
            $(this).next(".inner").slideUp();
        });
    })
    //;=========================================================script Count========================// 
    //
    $(document).ready(function(){
    var countDownDate = new Date("Jul 31, 2024 15:37:25").getTime();
    var x = setInterval(function() {
        
        var now = new Date().getTime();
        // console.log(now);

        var distance = countDownDate - now;
        // console.log(distance);

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".days").html(days + " D");
        $(".hours").html(hours + " h");
        $(".minutes").html(minutes + " m");
        $(".seconds").html(seconds + " s");

        if (distance < 0) {
            clearInterval(x);
            $(".count-overlay").html("End Time"); 
        }
    }, 1000); 
});
//======================================================== script contact textarea=================//
$("textarea").on("input", function(){
    // $("#chars").val;
    var maxLength = 100;
   var conInp=$(this).val().length;
   var result=maxLength- conInp
   $("#chars").text(result)
   if(result <= 0){
    $("#chars").text("Your available character finished")
   }
})
});

// =========================================================================//