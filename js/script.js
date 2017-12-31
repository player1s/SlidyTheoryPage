var height = window.height;
var width = window.width;

$(document).bind('mousemove',function(e){ 
    $("#services").css("margin-left", e.pageX);
    $("#portfolio").css("margin-left", 100+e.pageX);
    $("#contact").css("margin-left", e.pageX);
    $("#about").css("margin-left", e.pageX);
});