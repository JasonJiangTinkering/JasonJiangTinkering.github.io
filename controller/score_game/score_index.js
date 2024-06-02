function check_win_con() {
    // Your win function code goes here
    if (scrollPosition > 1000 && getCookie('home_badge') != '1'){
        window.alert("You won the home badge!");
        console.log("You win home badge!");
        setCookie('home_badge', '1', 7);
        $("#home_badge").attr("class", "active")
    }
}
