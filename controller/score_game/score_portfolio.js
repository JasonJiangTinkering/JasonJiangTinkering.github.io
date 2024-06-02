function check_win_con() {
    
    // Your win function code goes here
    if (scrollPosition > 740 && getCookie('portfolio_badge') != '1'){
        window.alert("You won the portfolio badge!");
        console.log("You win portfolio badge!");
        setCookie('portfolio_badge', '1', 7);
        $("#portfolio_badge").attr("class", "active")
    }
}
