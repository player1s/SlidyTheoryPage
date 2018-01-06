$(document).ready(function(){
/*About--------------------------------*/
    $("#aboutLink").click(function(){
        moveToAboutFromMain();
        moveMainAwayFromAbout();
    });
    $("#aboutBack").click(function(){
        moveToMainFromAbout();
        moveAboutAwayFromMain();
    });
/*Services--------------------------------*/
    $("#servicesLink").click(function(){
        moveToServicesFromMain();
        moveMainAwayFromServices();
    });
/*Portfolio--------------------------------*/
    $("#portfolioLink").click(function(){
        moveToPortfolioFromMain();
        moveMainAwayFromPortfolio();
    });
/*Contact--------------------------------*/    
    $("#contactLink").click(function(){
        moveToContactFromMain();
        moveMainAwayFromContact();
    });
    
});

$("#mainWrapper").css({
    "position": "absolute",
    /*"left": width,
    "top": -height,*/
    "width": width,
    "height": height,
    "border": "solid 5px red"
});
/*About--------------------------------*/
$("#aboutWrapper").css({
    "position": "absolute",
    "left": width,
    "top": -height,
    "width": width,
    "height": height,
    "border": "solid 5px blue"
});

function moveToAboutFromMain() {
    $("#aboutWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}

function moveMainAwayFromAbout() {
    $("#mainWrapper").animate({
            "left": -width,
            "top": height
        }, 3000);
}

function moveToMainFromAbout() {
    $("#aboutWrapper").animate({
            "left": width,
            "top": -height
        }, 3000);
}

function moveAboutAwayFromMain() {
    $("#mainWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}
/*Services--------------------------------*/
$("#servicesWrapper").css({
    "position": "absolute",
    "left": -width,
    "top": height,
    "width": width,
    "height": height,
    "border": "solid 5px black"
});

function moveToServicesFromMain() {
    $("#servicesWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}

function moveMainAwayFromServices() {
    $("#mainWrapper").animate({
            "left": width,
            "top": -height
        }, 3000);
}
/*Portfolio--------------------------------*/
$("#portfolioWrapper").css({
    "position": "absolute",
    "left": width,
    "top": height,
    "width": width,
    "height": height,
    "border": "solid 5px green"
});

function moveToPortfolioFromMain() {
    $("#portfolioWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}

function moveMainAwayFromPortfolio() {
    $("#mainWrapper").animate({
            "left": -width,
            "top": -height
        }, 3000);
}
/*Contact--------------------------------*/
$("#contactWrapper").css({
    "position": "absolute",
    "left": -width,
    "top": -height,
    "width": width,
    "height": height,
    "border": "solid 5px pink"
});

function moveToContactFromMain() {
    $("#contactWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, 3000);
}

function moveMainAwayFromContact() {
    $("#mainWrapper").animate({
            "left": width,
            "top": height
        }, 3000);
}