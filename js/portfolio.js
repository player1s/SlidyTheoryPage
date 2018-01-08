/*Event listeners for the page transitions*/
$(document).ready(function(){
    $("#portfolioLink").click(function(){
        moveToPortfolio();
        moveMainAwayFromPortfolio();
    });
    $("#portfolioBack").click(function(){
        moveToMain();
        movePortfolioAwayFromMain();
    });
});

/*Set initial position and styles for the page*/
$("#portfolioWrapper").css({
    "position": "absolute",
    "left": width,
    "top": height,
    "width": width,
    "height": height,
    "border": "solid 5px green"
});

/*Functions to make the movment between the pages*/
function moveToPortfolio() {
    $("#portfolioWrapper").animate({
            "left": "0px",
            "top": "0px"
        }, TRANSITION_DURATION);
}

function moveMainAwayFromPortfolio() {
    $("#mainWrapper").animate({
            "left": -width,
            "top": -height
        }, TRANSITION_DURATION);
}

function movePortfolioAwayFromMain() {
    $("#portfolioWrapper").animate({
            "left": width,
            "top": height
        }, TRANSITION_DURATION);
}