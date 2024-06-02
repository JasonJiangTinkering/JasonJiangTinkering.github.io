document.addEventListener("DOMContentLoaded", function() {
    // Get the current screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Check if the screen size is not greater than 2362x1272
    if (screenWidth <= 2362 && screenHeight <= 1272) {

        if (screenWidth <= 2362){
            alert("Your screen height is too small to view this content. Please resize your browser window to a larger size. Or continue with scaled content");
        }
        if (screenHeight <= 1272){
            alert("Your screen height is too small to view this content. Please resize your browser window to a larger size. Or continue with scaled content");
        }
        
        
        // Shrink the content to make it fit
        var max_ratio = Math.min(screenWidth / 2362, screenHeight / 1272);
        
        document.body.style.transform = "scale(" + max_ratio + ")";
        document.body.style.transformOrigin = "top left";
    }
});
