function reset_game() {
    setCookie('home_badge', '0', 7);
    setCookie('about_me_badge', '0', 7);
    setCookie('portfolio_badge', '0', 7);
    setCookie('network_badge', '0', 7);
    setCookie('mystery_badge', '0', 7);
    $("#home_badge").attr("class", "")
    $("#about_me_badge").attr("class", "")
    $("#portfolio_badge").attr("class", "")
    $("#network_badge").attr("class", "")
    $("#mystery_badge").attr("class", "")
    $("#unknown_link").attr("href", "#")
    window.alert("Game has been reset!")
}