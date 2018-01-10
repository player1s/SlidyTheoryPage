/*Event listeners for the page transitions*/
$(document).ready(function(){
    $("#servicesLink").click(function(){
        moveToServices();
        moveMainAwayFromServices();
    });
    $("#servicesBack").click(function(){
        moveToMain();
        moveServicesAwayFromMain();
    });
});

/*Set initial position and styles for the page*/
$("#servicesWrapper").css({
    "position": "absolute",
    "left": -width,
    "top": height,
    "width": width,
    "height": height,
    "border": "solid 5px black"
});

/*Functions to make the movment between the pages*/
function moveToServices() {
    $("#servicesWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, TRANSITION_DURATION);
}

function moveMainAwayFromServices() {
    $("#mainWrapper").animate({
            "left": width,
            "top": -height
        }, TRANSITION_DURATION);
}

function moveServicesAwayFromMain() {
    $("#servicesWrapper").animate({
            "left": -width,
            "top": height
        }, TRANSITION_DURATION);
}

/*Experimental thing with the mouse to scroll*/
//mousePosition = -1;
/*$(document).bind('mousemove', function (e) {
    if (e.pageY > height-height/10) {
        var scroll = $("#servicesWrapper").css("top").replace("px", "");
//        $("#servicesWrapper").stop(true);
        if( !$("#servicesWrapper").is(':animated') ) {
            $("#servicesWrapper").animate({ 
                    "top": scroll-height/10+"px" 
                }, 500);
        }
    } 
});*/