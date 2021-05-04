$(document).ready(function(){
    var htmlMethod = $("#leader").html();

    var followerContent = $("#follower").html("I am the leader");
    console.log(followerContent);
    followerContent = $("#follower").html();

    if (followerContent === "I am the leader") {
        $("#leader").html("What you are is a copycat");
    }
    $("#font-changer").click(function(){
        var currentFontFamily = $("body").css("font-family");
        //alert(currentFontFamily);
        if (currentFontFamily === "serif" || currentFontFamily === "Times") {
            $("body").css("font-family", "sans-serif");
        } else {
            $("body").css("font-family", "serif");
        }
    });

    // $("h2").mouseenter(function(){
    //     $("h2").addClass("highlight");
    //     $("h2").addClass("hotPinkIt");
    // });
    //
    // $("h2").mouseleave(function(){
    //     $("h2").removeClass("highlight");
    //     $("h2").removeClass("hotPinkIt");
    // });
    //
    // $("h2").hover(
    //     function(){
    //         $("h2").addClass("highlight");
    //         $("h2").addClass("hotPinkIt");
    //     },
    //     function(){
    //         $("h2").removeClass("highlight");
    //         $("h2").removeClass("hotPinkIt");
    //         //$("p").css("font-family", "Marsneveneksk");
    //     }
    // );

    $("h1").mouseenter(function(){
        $(this).toggleClass("wildIt");
    });
});
