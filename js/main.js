var height = $(window).height();
var width = $(window).width();
$(document).bind('mousemove', function (e) {
    $("#servicesLink").css("margin-left", 0 + width / 10 - (e.pageX / 7));
    $("#servicesLink").css("margin-top", height - height / 10 - (e.pageY / 3));
    $("#portfolioLink").css("margin-left", width + width / 200 - (e.pageX / 7));
    $("#portfolioLink").css("margin-top", height - (e.pageY / 3));
    $("#contactLink").css("margin-left", 0 + width / 10 - (e.pageX / 7));
    $("#contactLink").css("margin-top", 0 + height / 5 - (e.pageY / 3));
    $("#aboutLink").css("margin-left", width + width / 200 - (e.pageX / 7));
    $("#aboutLink").css("margin-top", 0 + height / 5 - (e.pageY / 3));
    
    
    
    
    
    $("#riseTheoryTitle").css("margin-top", 0 + height / 2 + ((e.pageY-height/2) / 3));
    $("#riseTheoryTitle").css("margin-left", 0 + width / 2 + ((e.pageX-width/2) / 3));
});

$("#riseTheoryTitle").css("margin-top", 0 + height / 2 );
    $("#riseTheoryTitle").css("margin-left", 0 + width / 2 );

 $("#servicesLink").css("margin-left", 0 + width / 10);
    $("#servicesLink").css("margin-top", height - height / 10 );
    $("#portfolioLink").css("margin-left", width - width / 10 );
    $("#portfolioLink").css("margin-top", height - height / 10 );
    $("#contactLink").css("margin-left", 0 + width / 10 );
    $("#contactLink").css("margin-top", 0 + height / 10 );
    $("#aboutLink").css("margin-left", width - width / 10 );
    $("#aboutLink").css("margin-top", 0 + height / 10 );