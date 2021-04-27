$(function()
{
    $('.header').on('mouseenter',function()
    {
        console.log('hi');
        $('.prr').addClass('po');
    })
    $('.header').on('mouseleave',function()
    {
        console.log('hi');
        $('.prr').removeClass('po');
    })
    $('.header').on('mouseenter',function()
    {
        console.log('hi');
        $('.prr1').addClass('po1');
    })
    $('.header').on('mouseleave',function()
    {
        console.log('hi');
        $('.prr1').removeClass('po1');
    })
    $('.nav li').on('click',function()
    {
        $(this).siblings().removeClass("act");
        $(this).addClass("act");
    })
    $(window).on('scroll',function()
    {
        if($(this).scrollTop()>650)
        {
            $('.nav').addClass("po");
            console.log("hi");
        }
        else{
            $('.nav').removeClass("po");  
        }
        if($(window).scrollTop()>$('.header').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ab").addClass("act");

        }
        if($(window).scrollTop()>$('.serv').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ab").nextUntil("li.ad").addClass("act");

        }
        if($(window).scrollTop()>$('.about').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ac").nextUntil("li.ae").addClass("act");

        }
        if($(window).scrollTop()>$('.port').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ad").nextUntil("li.af").addClass("act");

        }
        if($(window).scrollTop()>$('.team').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ae").nextUntil("li.ag").addClass("act");

        }
        if($(window).scrollTop()>=$('.blog').offset().top)
        {
            console.log("no");
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ag").addClass("act");

        }
        if($(window).scrollTop()>$('.contact').offset().top)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ah").addClass("act");

        }
        else{
            $('.nav').children('li').children().removeClass("act");
        }
    });
   

})