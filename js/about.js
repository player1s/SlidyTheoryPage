/*Event listeners for the page transitions*/
$(document).ready(function(){
    $("#aboutLink").click(function(){
        moveToAbout();
        moveMainAwayFromAbout();
    });
    $("#aboutBack").click(function(){
        moveToMain();
        moveAboutAwayFromMain();
    });
});
$(document).ready(function(){
    $("#aboutLink").click(function(){
        moveToAbout();
        moveMainAwayFromAbout();
    });
    $("#aboutBack").click(function(){
        moveToMain();
        moveAboutAwayFromMain();
    });
});

/*Set initial position and styles for the page*/
$("#mainWrapper").css({
    "position": "absolute",
    "width": width,
    "height": height,
    "border": "solid 5px red"
});

$("#aboutWrapper").css({
    "position": "absolute",
    "left": width,
    "top": -height,
    "width": width,
    "height": height,
    "border": "solid 5px blue"
});

/*Functions to make the movment between the pages*/
function moveToAbout() {
    $("#aboutWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, TRANSITION_DURATION);
}

function moveMainAwayFromAbout() {
    $("#mainWrapper").animate({
            "left": -width,
            "top": height
        }, TRANSITION_DURATION);
}

function moveAboutAwayFromMain() {
    $("#aboutWrapper").animate({
            "left": width,
            "top": -height
        }, TRANSITION_DURATION);
}

function moveToMain() {
    $("#mainWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, TRANSITION_DURATION);
}