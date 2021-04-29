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
    $('.nav ul li').on('click',function()
    {
       
        $(this).parent().children().removeClass("act");
        $(this).addClass("act");
       
    })
    $('.men li').on('click',function()
    {
       
        $(this).parent().children().removeClass("act");
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
        if($(window).scrollTop()>($('.header').offset().top)-50)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ab").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ab").addClass("act");


        }
        if($(window).scrollTop()>($('.serv').offset().top)-100)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ac").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ac").addClass("act");
            

        }
        if($(window).scrollTop()>($('.about').offset().top)-100)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ad").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ad").addClass("act");

        }
        if($(window).scrollTop()>($('.port').offset().top)-50)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ad").nextUntil("li.af").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ae").addClass("act");

        }
        if($(window).scrollTop()>($('.team').offset().top)-200)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ae").nextUntil("li.ag").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.af").addClass("act");

        }
        if($(window).scrollTop()>=($('.blog').offset().top)-100)
        {
            console.log("no");
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ag").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ag").addClass("act");

        }
        if($(window).scrollTop()>($('.contact').offset().top)-50)
        {
            console.log('yes');
            $('.nav').children().children('ul').children().removeClass("act");
            $('.nav').children().children('ul').children("li.ah").addClass("act");
            $('.men').children().children().removeClass("act");
            $('.men').children().children("li.ah").addClass("act");

        }
        else{
            $('.nav').children('li').children().removeClass("act");
            //$('.men').children().children().removeClass("act");
        }
    });
    $('.ff').on('click',function()
    {
        $('.men').toggleClass('dis');
        $('.men').addClass('pos'); 
        console.log($(window).scrollTop());


        
        /*if($(window).scrollTop()<983){
            console.log("hhhhhhhhhhhh");
            $('.men').removeClass('pos'); 
            console.log($(window).scrollTop());

        }*/
       
      
       
    })
    $(window).on('scroll',function()
    {
        if($(window).scrollTop()>700)
        {
            $('.men').addClass('pos'); 
            //console.log($(this).scrollTop());
        }
        else
        {
            $('.men').removeClass('pos');
        } 
    })


   

})