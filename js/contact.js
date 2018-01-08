/*Event listeners for the page transitions*/
$(document).ready(function(){
    $("#contactLink").click(function(){
        moveToContact();
        moveMainAwayFromContact();
    });
    $("#contactBack").click(function(){
        moveToMain();
        moveContactAwayFromMain();
    }); 
});

/*Set initial position and styles for the page*/
$("#contactWrapper").css({
    "position": "absolute",
    "left": -width,
    "top": -height,
    "width": width,
    "height": height,
    "border": "solid 5px pink"
});

/*Functions to make the movment between the pages*/
function moveToContact() {
    $("#contactWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, TRANSITION_DURATION);
}

function moveMainAwayFromContact() {
    $("#mainWrapper").animate({
            "left": width,
            "top": height
        }, TRANSITION_DURATION);
}

function moveContactAwayFromMain() {
    $("#contactWrapper").animate({
            "left": -width,
            "top": -height
        }, TRANSITION_DURATION);
}