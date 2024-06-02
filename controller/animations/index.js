// Check if section buttons were pressed
  
window.addEventListener("hashchange", setScrollBasedOnHash, false);

window.addEventListener("load", function() {
    if (location.hash) {
        setScrollBasedOnHash();
    }
});

function setScrollBasedOnHash(){
    var hash = location.hash.replace( /^#/, '' );
    if (hash == "HowTo"){
        scrollPosition = 0;
    }
    // if (hash == "Sections"){
    //     scrollPosition = 250;
    // }
    if (hash == "Mission"){
        scrollPosition = 400;
    }

}

// pull all the element that will be animated

var start_image = $("#start_image")
var mission = $("#Mission")
var DoSomething = $("#DoSomething")
var SectionsButtton = $("#Sections_Button")
var HowToButton = $("#How_To_Button")
var MissionButton = $("#Mission_Button")
var sections = $("#sections")
// based on scroll position, edit page with animations
function render_page(last_scroll_position, scroll_position){

    check_win_con();
    console.log(scroll_position)
    if (scroll_position <= 0){
        scroll_position = 0;
        start_image.css({
            "borderRadius": "235px",
            "minWidth": "0vw",
            "minHeight": "0vh",
        }
        )
        HowToButton.attr("class", "active")
        SectionsButtton.attr("class", "")
        MissionButton.attr("class", "")
    }
    if (scroll_position > 0 && scroll_position < 100){
        start_image.css(
            {
                "minWidth": scroll_position+ "vw",
                "minHeight": scroll_position+"vh",
                "borderRadius": "235px",

            }
        )
    }
    if (scroll_position > 100 && scroll_position < 220){
        start_image.css(
            {
                "minWidth": "100vw",
                "minHeight": "calc(100vh - 131px)",
                "borderRadius": (100*(220-scroll_position)/220) + "px",
            }
        )
    }
    if (scroll_position > 220){
        start_image.css(
            {
                "minWidth": "100vw",
                "minHeight": "calc(100vh - 131px)",
                "borderRadius": "0px",
            }
        )
    }
    if (scroll_position > 250 && scroll_position < 325){
        HowToButton.attr("class", "")
        SectionsButtton.attr("class", "")
        MissionButton.attr("class", "active")
        mission.css(
            {
                "opacity": (scroll_position-250)/25,
            }
        )
    }else if (scroll_position > 325 && scroll_position < 400){
        HowToButton.attr("class", "")
        SectionsButtton.attr("class", "")
        MissionButton.attr("class", "active")
        mission.css(
            {
                "opacity": 1-((scroll_position-250)/25),
            }
        )
    }else{
        mission.css(
            {
                "opacity": 0,
            }
        )
    }
    if (scroll_position > 375){
        start_image.css(
            {
                "filter": "brightness(50%)",
            }
        )
        DoSomething.css(
            "opacity", (scroll_position-375)/75
        )
    }else{
        start_image.css(
            {
                "filter": "brightness(100%)",
            }
        )
        DoSomething.css(
            "opacity", 0
        )
    }
    if (scroll_position > 400 && scroll_position < 600){
        sections.css({
            "opacity": (scroll_position-400)/200,
            "z-index": 10,
    })
    } else if (scroll_position >= 600) {
        sections.css({
            "opacity": 1,
            "z-index": 10,
        })
    }else{
        sections.css({
            "opacity": 0,
            "z-index": 0,
        }) 
    }
    if (scroll_position > 600 && scroll_position < 1000){
        getComputedStyle(sections.get()[0]).getPropertyValue("--hiddenPercent");
        sections.get()[0].style.setProperty("--hiddenPercent", 
        (1000-scroll_position)/1000);
    }else if (scroll_position >= 1000){
        sections.get()[0].style.setProperty("--hiddenPercent", 0);
    }
    else{
        sections.get()[0].style.setProperty("--hiddenPercent", 1);
    }

}