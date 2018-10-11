$(function(){
    var page=1;
    var length=$('.team').children().length
    var imgWid=$('.team1').innerWidth()
    $('.arrow-left').click(function(){
           page--;
           console.log(page)
           if(page<0){
            $('.team').css({"left":'-1600px'})
            page=3;
        }
        $('.team').animate({left:-imgWid*page+'px'})
          
    })
$('.arrow-right').click(fun)
 //自动播放
 var timer = null;
 timer = setInterval(function () {
    $('.arrow-right').click();
 }, 5000);

function fun(){
    page++;
    console.log(length-3)
    if(page>length-3){
     $('.team').css({"left":'-400px'})
     page=2;
 }
 $('.team').animate({left:-imgWid*page+'px'})
}
//页面的卷曲
    $(window).scroll(function () {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if($(window).scrollTop()>700){
            console.log(1)
            $('.cultrue-des').animate({left:0})
            $('.cultrue-img').animate({right:0})
        }

    })

})