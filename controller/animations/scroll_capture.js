document
    .querySelector("body")
    .addEventListener("mousewheel", onScroll);

document
    .querySelector("body")
    .addEventListener("touchmove", onScroll);

var scrollPosition = 0;
function onScroll(e){

    if (e.deltaY > 0) {
        render_page (scrollPosition, scrollPosition + 200);
        scrollPosition += 200;
    }else if (e.deltaY < 0){
        render_page (scrollPosition, scrollPosition - 200);
        scrollPosition -= 200;

    }
    
}

