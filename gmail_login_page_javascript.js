$(document).ready(function() {
    $("#canvas").hide();
    $("#hide_show_button_login").click(function() {
        $("#canvas").slideToggle("slow");
        $("#padlock_image").fadeToggle("slow");
    })
    $("#hide_show_button_login").mouseenter(function() {
        $("#hide_show_button_login").css("background-color", "#61db96"); 
    });
    $("#hide_show_button_login").mouseleave(function() {
        $("#hide_show_button_login").css("background-color", "#4fd78a"); 
    });
});