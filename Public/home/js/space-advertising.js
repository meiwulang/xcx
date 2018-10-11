$(function() {

    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 100) {
            $(".little-img").animate({ left: '30px', width: "450px", height: "462px", top: '-17px' }, 1000)
        }
    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 600) {
            $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "159px", top: "250px" }, 1000)
        }
    })
})