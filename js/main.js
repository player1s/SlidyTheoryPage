const TRANSITION_DURATION = 3000;
var height = $(window).height();
var width = $(window).width();

/* Movement */
$(document).bind('mousemove', function (e) {

    $("#servicesLink").css("margin-left", 0 + width / 10 - (e.pageX / 35));
    $("#servicesLink").css("margin-top", height - height / 10 - (e.pageY / 23));
    
    $("#portfolioLink").css("margin-left", width - width / 20 - (e.pageX / 35));
    $("#portfolioLink").css("margin-top", height - height / 10 - (e.pageY / 23));

    
    $("#contactLink").css("margin-left", 0 + width / 10 - (e.pageX / 35));
    $("#contactLink").css("margin-top", 0 + height / 8 - (e.pageY / 23));
    
    $("#aboutLink").css("margin-left", width - width / 20 - (e.pageX / 35));
    $("#aboutLink").css("margin-top", 0 + height / 8 - (e.pageY / 23));
    
    $("#riseTheoryTitle").css("margin-top", 0 + height / 6 + ((e.pageY-height/20) / 20));
    $("#riseTheoryTitle").css("margin-left", 0 + width / 2.55 + ((e.pageX-width/20) / 20));
    
    $("#motto").css("margin-top", 0 + height / 1.4 );
    $("#motto").css("margin-left", 0 + width / 2.5 + ((e.pageX-width/20) / 20));
    
    $("#motto2").css("margin-left", 0 + width / 10 - (e.pageX / 20));
    $("#motto2").css("margin-top", 0 + height / 2);
    
    $("#logo").css("margin-left", width * 0.87 - (e.pageX / 20  ));
    $("#logo").css("margin-top", 0 + height / 3);
});
/* STarting position */
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


//------------------Portfolio

$(document).ready(function(){
    var divHeight= $(".switchOne").height();
    $(".switchTwo").css({"min-height": divHeight});
});

    $(".switch").hover(function(){   
    $(this).find('.switchOne').hide();
    $(this).find('.switchTwo').show();
}, function(){
    $(this).find('.switchTwo').hide();
    $(this).find('.switchOne').show();
});
