height = $(window).height();
width = $(window).width();
$(document).bind('mousemove', function (e) {
    $("#services").css("margin-left", 0 + width / 10 - (e.pageX / 7));
    $("#services").css("margin-top", height - (e.pageY / 3));
    $("#portfolio").css("margin-left", width + width / 200 - (e.pageX / 7));
    $("#portfolio").css("margin-top", height - (e.pageY / 3));
    $("#contact").css("margin-left", 0 + width / 10 - (e.pageX / 7));
    $("#contact").css("margin-top", 0 + height / 5 - (e.pageY / 3));
    $("#about").css("margin-left", width + width / 200 - (e.pageX / 7));
    $("#about").css("margin-top", 0 + height / 5 - (e.pageY / 3));
});