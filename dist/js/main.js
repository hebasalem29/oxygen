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
})