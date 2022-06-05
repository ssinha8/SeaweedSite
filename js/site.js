bubbleClick = $("#bubbleClick");

// sets the opacity to 100% if 0%, and 0% if 100%
$("#bubbleClick").click(function() {
    document.getElementById("pop").play();
    if ($('#textContainer1').css('opacity') == 0) {
        $('#textContainer1').fadeTo('fast', 1);
    }
    else {
        $('#textContainer1').fadeTo('fast', 0);
    }
});

$("#stemClick").click(function() {
    document.getElementById("pop").play();
    if ($('#textContainer2').css('opacity') == 0) {
        $('#textContainer2').fadeTo('fast', 1);
    }
    else {
        $('#textContainer2').fadeTo('fast', 0);
    }
});

$("#holdfastClick").click(function() {
    document.getElementById("pop").play();
    if ($('#textContainer3').css('opacity') == 0) {
        $('#textContainer3').fadeTo('fast', 1);
    }
    else {
        $('#textContainer3').fadeTo('fast', 0);
    }
});
