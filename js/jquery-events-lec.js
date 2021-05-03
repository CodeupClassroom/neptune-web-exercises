"use strict";
(function () {

    // The Document Object Model provides an Event Model (or interface) that allows you to
    // write code that responds to events that happen in within the browser.

    // target.addEventListener("type", listener);

    // Click Event
    // var moonEvent = function () {
    //     document.querySelector("#main-content").style.backgroundImage = "url(img/moon-surface.png)";
    //     // this = moonText object
    //     this.innerHTML = "Do I have to wear a mask on the moon?"
    // }
    // var moonText = document.querySelector("#moon-travel");
    //
    // moonText.addEventListener("click", moonEvent);

    // Long way
    // document.querySelector("#moon-travel").addEventListener("click", function () {
    //     document.querySelector("#main-content").style.backgroundImage = "url(img/moon-surface.png)";
    //     document.querySelector("#moon-travel").innerHTML = "Do I have to wear a mask on the moon?";
    // });

    // jQuery Click Event
    $('#moon-travel').click(function() {
        $('#main-content').css('background-image', 'url(img/moon-surface.png)');
        $(this).html('Do I have to wear a mask on the moon?')
    })

    // Mouse Event

    // var goku = document.querySelector("#goku");
    //
    // var gokuListener = function () {
    //     this.src = 'img/goku-mad.png';
    //     this.addEventListener("mouseout", function() {
    //         this.src = "img/goku-normal.png";
    //     });
    // }
    //
    // goku.addEventListener("mouseover", gokuListener);

    // jQuery Hover Event

    $('#goku').hover(function() {
        $(this).attr('src', 'img/goku-mad.png');
    }, function(){
        $(this).attr('src', 'img/goku-normal.png');
    });

    // jQuery Double Click Event
    $('#double-size').dblclick(function(){
        var currentSize = parseFloat($(this).css('font-size'));
        console.log(currentSize);
        var doubledSize = (currentSize * 2) + "px";
        console.log(doubledSize);
        $(this).css('font-size', `${doubledSize}`);
    })

    // Removing an Event Listener

    // var gokuChill = function () {
    //     goku.removeEventListener("mouseover", gokuListener);
    // }

    // document.querySelector(".goku-chill").addEventListener("click", gokuChill);


    // Removing an event using jQuery
    $('.goku-chill').click(function() {
        $('#goku').off('mouseenter');
    })


    // Click Event

    // document.querySelector("#color-btn").addEventListener("click", function() {
    //     console.log(document.getElementById("text-color").value);
    //     document.querySelector("body").style.color = document.getElementById("text-color").value;
    // });

    // jQuery Click Event

    function changeTextColor() {
        $('body').css('color', $('#text-color').val())
    }

    $('#color-btn').click(changeTextColor);



    // Change event
    // document.querySelector("#travel-items").addEventListener("change", function(event) {
    //     console.log(event.target);
    //     document.querySelector(".result").innerHTML = `I agree that ${event.target.value} is important!`
    // });

    // jQuery Change Event
    $('#travel-items').change(function(event) {
        console.log(event.target)
        $('.result').html( `I agree that ${event.target.value} is important!`);
    })

    // ********* Keyboard Events **********

    // Key event
    document.addEventListener("keyup", function(event){
        console.log(event);
        if (event.key === " ") {
            document.querySelector(".space-bar").style.display = "inline";
        }
    });

})();