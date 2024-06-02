function check_win_con() {
    // Your win function code goes here
    if (scrollPosition > 1000 && getCookie('home_badge') != '1'){
        window.alert("You won the home badge!");
        console.log("You win home badge!");
        setCookie('home_badge', '1', 7);
    }
}

$(document).ready(function() {
   if (getCookie('home_badge') == '1'){
       $("#home_badge").attr("class", "active")
   }
    if (getCookie('about_me_badge') == '1'){
         $("#about_me_badge").attr("class", "active")
    }
    if (getCookie('portfolio_badge') == '1'){
         $("#portfolio_badge").attr("class", "active")
    }
    if (getCookie('network_badge') == '1'){
         $("#network_badge").attr("class", "active")
    }
    if (getCookie('mystery_badge') == '1'){
         $("#mystery_badge").attr("class", "active")
    }
    if (getCookie('home_badge') == '1' && getCookie('about_me_badge') == '1' && getCookie('portfolio_badge') == '1' && getCookie('network_badge') == '1'){
        unknown_link = document.getElementById("unknown_link").href = "/next_steps.html";
    }
    if (getCookie('home_badge') == '1' && getCookie('about_me_badge') == '1' && getCookie('portfolio_badge') == '1' && getCookie('network_badge') == '1' && getCookie('mystery_badge') == '1'){
        window.alert("You won the game!")
    }
});