$(function() {
    // $(".content-lll-little-img").animate({ left: '54px', width: "450px", height: "346px", top: '104px' }, 1000)

    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1100) {
            $(".content-lll-little-img").animate({ left: '54px', width: "450px", height: "346px", top: '104px' }, 1000)
        }
    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1600) {
            $(".content-llll-little-img").animate({ right: "30px", width: "450px", height: "385px", top: "18px" }, 1000)
        }
    })
    $(".icon-bg").addClass("advScale")
    setTimeout(function() {
        $(".icon-top").addClass("iconTOP")
    }, 1600)
    setTimeout(function() {
        $(".icon-mid").addClass("iconMid")
    }, 1800)
    setTimeout(function() {
        $(".icon-bot").addClass("iconBot")
    }, 2200)

    $('.content-bottom-tab li').click(function() {
        // console.log($(".content-bottom-tab li").index(this))
        // console.log($(this).index());
        var li = $(this).index();
        $(".content-bottom-tab li").eq(li).addClass("acrion").siblings().removeClass("acrion");
        $(".content-bottom-tab div").eq(li).show().siblings("div").hide();

    })

})