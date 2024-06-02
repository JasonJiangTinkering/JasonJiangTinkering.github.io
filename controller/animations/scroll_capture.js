document
    .querySelector("body")
    .addEventListener("mousewheel", onScroll);

document
    .querySelector("body")
    .addEventListener("touchmove", onScroll);

var scrollPosition = 0;
function onScroll(e){
    e.preventDefault();
    e.stopPropagation();
    if (e.deltaY > 0) {
        render_page (scrollPosition, scrollPosition + 20);
        scrollPosition += 20;
    }else if (e.deltaY < 0){
        render_page (scrollPosition, scrollPosition - 20);
        scrollPosition -= 20;

    }
    document.body.scrollPosition = 0;
    
}

