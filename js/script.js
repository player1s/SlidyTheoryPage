height = $(window).height();
width = $(window).width();

$(document).bind('mousemove',function(e){ 
    $("#services").css("margin-left",  0 + 100 -(e.pageX/10));
    $("#portfolio").css("margin-left", width + 100 -(e.pageX/10));
    $("#contact").css("margin-left",  0 + 100 -(e.pageX/10));
    $("#about").css("margin-left",  width + 100 -(e.pageX/10));
});