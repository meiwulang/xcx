$(function() {
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 120) {
            $(".little-img").animate({ left: '30px', width: "450px", height: "156px", top: '122px' }, 1000)
        }
    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 620) {
            $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "219px", top: "160px" }, 1000)
        }
    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1120) {
            $(".content-lll-little-img").animate({ left: '34px', width: "450px", height: "278px", top: '40px' }, 1000)
        }
    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1620) {
            $(".content-llll-little-img").animate({ right: "30px", width: "450px", height: "251px", top: "234px" }, 1000)
        }
    })

    //     $(".little-img").animate({ left: '34px', width: "450px", height: "156px", top: '122px' }, 1000)
    //     $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "219px", top: "160px" }, 1000)
    //     $(".content-lll-little-img").animate({ left: '34px', width: "450px", height: "278px", top: '40px' }, 1000)
    //     $(".content-llll-little-img").animate({ right: "30px", width: "450px", height: "251px", top: "234px" }, 1000)
})