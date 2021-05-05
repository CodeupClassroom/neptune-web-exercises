$(document).ready(function(){
    var htmlMethod = $("#leader").html();

    // var followerContent = $("#follower").html("I am the leader");
    // // console.log(followerContent);
    // followerContent = $("#follower").html();

    // if (followerContent === "I am the leader") {
    //     $("#leader").html("What you are is a copycat");
    // }
    // $("#font-changer").click(function(){
    //     var currentFontFamily = $("body").css("font-family");
    //     //alert(currentFontFamily);
    //     if (currentFontFamily === "serif" || currentFontFamily === "Times") {
    //         $("main").css("font-family", "sans-serif");
    //     } else {
    //         $("main").css("font-family", "serif");
    //     }
    // });

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

    // $("h1").mouseenter(function(){
    //     $(this).toggleClass("wildIt");
    // });



    $("#font-changer").click(function(){
        $("main").toggleClass("sansSerif");
    });

    // parent()
    // children()
    // prev()
    // next()


    $("#getCicero").click(function(){
        /* output = */ $(this).parent().parent().parent().prev().children("ul").children().first().css("color", "rebeccapurple");
        // console.log(output);
    });

    $("#list-style-remover").click(function(){
        $(this).parent().parent().parent().next().children().css("list-style", "none");

    });

    $("main ul li").each(function(index/*, listItem*/){
        $(this).css("font-style", "italic");
        if (index % 2 !==0){
            $(this).css("background-color", "cornsilk");
        }
        // if (index === 0){
        //     $(this).css("color", "rebeccapurple");
        // }
    });

    $("main ul li").first().css("color", "red");

    $("main ul li").last().css("text-decoration", "underline dotted");

    $("h2").hover(

        function(){
            var theNextOne = $(this).next();
        theNextOne.slideUp("slow");
    },
        function(){
            $(this).next().slideDown("slow");
        });
});
