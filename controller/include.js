$(function(){
    $("div[include-html]").each(function(){
        $(this).load('../' + $(this).attr("include-html"));
        
    });
    
})