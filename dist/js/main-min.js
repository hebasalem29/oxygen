$(function(){$(".header").on("mouseenter",function(){console.log("hi"),$(".prr").addClass("po")}),$(".header").on("mouseleave",function(){console.log("hi"),$(".prr").removeClass("po")}),$(".header").on("mouseenter",function(){console.log("hi"),$(".prr1").addClass("po1")}),$(".header").on("mouseleave",function(){console.log("hi"),$(".prr1").removeClass("po1")}),$(".nav ul li").on("click",function(){$(this).parent().children().removeClass("act"),$(this).addClass("act")}),$(".men li").on("click",function(){$(this).parent().children().removeClass("act"),$(this).addClass("act")}),$(window).on("scroll",function(){$(this).scrollTop()>650?($(".nav").addClass("po"),console.log("hi")):$(".nav").removeClass("po"),$(window).scrollTop()>$(".header").offset().top-50&&(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ab").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ab").addClass("act1")),$(window).scrollTop()>$(".serv").offset().top-100&&(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ac").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ac").addClass("act1")),$(window).scrollTop()>$(".about").offset().top-100&&(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ad").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ad").addClass("act1")),$(window).scrollTop()>$(".port").offset().top-50&&(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ad").nextUntil("li.af").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ae").addClass("act1")),$(window).scrollTop()>$(".team").offset().top-200&&(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ae").nextUntil("li.ag").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.af").addClass("act1")),$(window).scrollTop()>=$(".blog").offset().top-100&&(console.log("no"),console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ag").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ag").addClass("act1")),$(window).scrollTop()>$(".contact").offset().top-50?(console.log("yes"),$(".nav").children().children("ul").children().removeClass("act"),$(".nav").children().children("ul").children("li.ah").addClass("act"),$(".men").children().children().removeClass("act1"),$(".men").children().children("li.ah").addClass("act1")):$(".nav").children("li").children().removeClass("act")}),$(".ff").on("click",function(){$(".men").toggleClass("dis"),$(".men").addClass("pos"),console.log($(window).scrollTop())}),$(window).on("scroll",function(){$(window).scrollTop()>700?$(".men").addClass("pos"):$(".men").removeClass("pos")})});