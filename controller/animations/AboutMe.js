// Check if section buttons were pressed
  
window.addEventListener("hashchange", setScrollBasedOnHash, false);

window.addEventListener("load", function() {
    if (location.hash) {
        setScrollBasedOnHash();
    }
});

function setScrollBasedOnHash(){
    var hash = location.hash.replace( /^#/, '' );
    if (hash == "FollowFlow"){
        render_page(scrollPosition, 0);
        scrollPosition = 0;
    }
    if (hash == "WhatIWant"){
        render_page(scrollPosition, 241);
        scrollPosition = 241;
    }
    if (hash == "FindingHumanity"){
        render_page(scrollPosition, 521);
        scrollPosition = 521;
    }
    location.hash = "";
}

// pull all the element that will be animated
var animatedWave = $("#animatedWave")
var animatedHearts = $("#animatedHearts")
var animatedHuman = $("#animatedHuman")
var FollowFlow = $("#FollowFlow")
var FollowWant = $("#FollowWant")
var FollowHuman = $("#FollowHuman")
var Flow = $("#Flow")
var WhatIWant = $("#WhatIWant")
var moral = $("#moral")
var FindingHumanity = $("#FindingHumanity")

var FlowButton = $("#FlowButton")
var WhatIWantButton = $("#WhatIWantButton")
var FindingHumanityButton = $("#FindingHumanityButton")
// based on scroll position, edit page with animations
function render_page(last_scroll_position, scroll_position){

    check_win_con();
    console.log(scroll_position);
    if (scroll_position <= 0){
        scroll_position = 0;
        WhatIWant.attr("active", false)
        FindingHumanity.attr("active", false)
        Flow.attr("active", true)
        FlowButton.attr("active", "true")
        WhatIWantButton.attr("active", "false")
        FindingHumanityButton.attr("active", "false")
        animatedWave.css(
            {
                "backgroundPositionX" : "0px",
            }
        )
        FollowFlow.css(
            {
                "left": "0vw",
            }
        )
    }

    if (scroll_position > 0 && scroll_position < 240){

        FlowButton.attr("active", "true")
        WhatIWantButton.attr("active", "false")
        FindingHumanityButton.attr("active", "false")

        Flow.attr("active", true)
        WhatIWant.attr("active", false)
        FindingHumanity.attr("active", false)
        animatedWave.css(
            {
                "backgroundPositionX" : 10*scroll_position + "px",
            }
        )
        FollowFlow.css(
            {
                "left": (-1*scroll_position) + "vw",
            }
        )

    }
     
    if (scroll_position > 260 && scroll_position < 500){

        FlowButton.attr("active", "false")
        WhatIWantButton.attr("active", "true")
        FindingHumanityButton.attr("active", "false")

        WhatIWant.attr("active", true)
        Flow.attr("active", false)
        FindingHumanity.attr("active", false)


        

        animatedHearts.css(
            {
                "backgroundPositionX" : 10*(scroll_position - 260) + "px",
            }
        )
        FollowWant.css(
            {
                "left": (-1*(scroll_position - 280)) + "vw",
            }
        )
    }else if (scroll_position > 240 && scroll_position < 260){
        // Fade in and out all section elements
        FlowButton.attr("active", "false")
        WhatIWantButton.attr("active", "true")
        FindingHumanityButton.attr("active", "false")
        Flow.css(
            {
                "opacity": 1-((scroll_position-240)/20),
            }
        )
        WhatIWant.css(
            {
                "opacity": (scroll_position-240)/20,
            }
        )
        WhatIWant.attr("active", true)
        Flow.attr("active", false)
        FindingHumanity.attr("active", false)
        animatedHearts.css(
            {
                "backgroundPositionX" : "0px",
            }
        )
        FollowWant.css(
            {
                "left": "0vw",
            }
        )
    }
    
    if (scroll_position > 520 && scroll_position < 760){
        FindingHumanity.attr("active", true)
        WhatIWant.attr("active", false)
        Flow.attr("active", false)

        FlowButton.attr("active", "false")
        WhatIWantButton.attr("active", "false")
        FindingHumanityButton.attr("active", "true")


        animatedHuman.css(
            {
                "backgroundPositionX" : 10*(scroll_position - 540) + "px",
            }
        )
        FollowHuman.css(
            {
                "left": (-1*(scroll_position - 540)) + "vw",
            }
        )
    }else if (scroll_position > 500 && scroll_position < 520){
        FindingHumanity.attr("active", true)
        WhatIWant.attr("active", false)
        Flow.attr("active", false)
        animatedHuman.css(
            {
                "backgroundPositionX" : "0px",
            }
        )
        FollowHuman.css(
            {
                "left": "0vw",
            }
        )
    }
    
    if (scroll_position > 780){
        FindingHumanity.attr("active", false)
        WhatIWant.attr("active", false)
        Flow.attr("active", false)
        moral.attr("active", true)
    }else{
        moral.attr("active", false)
    }
}