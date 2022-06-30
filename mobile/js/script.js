$(document).ready(function(){

$(".nav").click(function () {
$(".nav").css("display","none");
$(".pic").css("display","none");
$(".nav_menu").css("opacity","1");
$(".nav_close").css("opacity","1");
});

$(".nav_close").click(function () {
$(".nav").css("display","block");
$(".pic").css("display","block");
$(".nav_menu").css("opacity","0");
$(".nav_close").css("opacity","0");
});





});
