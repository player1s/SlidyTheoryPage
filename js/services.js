//mousePosition = -1;
$(document).bind('mousemove', function (e) {
    if (e.pageY > height-height/10) {
        var scroll = $("#servicesWrapper").css("top").replace("px", "");
//        $("#servicesWrapper").stop(true);
        if( !$("#servicesWrapper").is(':animated') ) {
            $("#servicesWrapper").animate({ 
                    "top": scroll-height/10+"px" 
                }, 500);
        }
    } 
});