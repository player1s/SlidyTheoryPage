$(document).ready(function(){
    $("#aboutLink").click(function(){
        moveToAboutFromMain();
        moveMainAway();
    });
});

$("#aboutWrapper").css({
    "position": "absolute",
    "left": width,
    "top": -height,
    "width": width,
    "height": height,
    "border": "solid 5px blue"
});

$("#mainWrapper").css({
    "position": "absolute",
    /*"left": width,
    "top": -height,*/
    "width": width,
    "height": height,
    "border": "solid 5px red"
});

function moveToAboutFromMain() {
    $("#aboutWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}

function moveMainAway() {
    $("#mainWrapper").animate({
            "left": -width,
            "top": height
        }, 3000);
}