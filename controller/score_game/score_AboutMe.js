function check_win_con() {
    // Your win function code goes here
    if (scrollPosition > 780 && getCookie('about_me_badge') != '1'){
        window.alert("You won the aboutme badge!");
        console.log("You win aboutme badge!");
        setCookie('about_me_badge', '1', 7);
        $("#about_me_badge").attr("class", "active")
    }
}
