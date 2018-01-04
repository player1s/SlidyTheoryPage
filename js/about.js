$(document).ready(function(){
    $("#aboutLink").click(function(){
        moveToAboutFromMain();
        moveMainAwayFromAbout();
    });
    $("#servicesLink").click(function(){
        moveToServicesFromMain();
        moveMainAwayFromServices();
    });
    $("#portfolioLink").click(function(){
        moveToPortfolioFromMain();
        moveMainAwayFromPortfolio();
    });
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