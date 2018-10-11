$(function() {
    // $(".little-img")
    // setInterval(function() {

    // }, 1000);
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 110) {
            console.log(1)
            $(".little-img").animate({ left: '30px', height: "120px", width: "392px", top: '266px' }, 1000)
                // $(".content-lll-little-img").animate({ left: "34px", width: "450px", height: "190px", top: "195px" }, 1000)
                // $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "190px", top: "100px" }, 1000)
        }


    })

    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 1600) {
            console.log(1)
            $(".content-llll-little-img").animate({ right: "30px", width: "450px", height: "120px", top: "190px" }, 1000)
                // $(".content-lll-little-img").animate({ left: "34px", width: "450px", height: "190px", top: "195px" }, 1000)
                // $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "190px", top: "100px" }, 1000)
        }


    })
    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 2100) {
            console.log(1)
            $(".content-lll-little-img").animate({ left: "34px", width: "450px", height: "190px", top: "195px" }, 1000)
                // $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "190px", top: "100px" }, 1000)
        }


    })
    $(window).scroll(function() {
            //注意：两个样式值的获取都是方法形式。
            console.log($(window).scrollTop())
            if ($(window).scrollTop() > 2600) {
                $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "190px", top: "100px" }, 1000)
            }


        })
        // $(".little-img").animate({ left: '30px', height: "120px", width: "392px", top: '266px' }, 1000)
        // $(".content-llll-little-img").animate({ right: "30px", width: "450px", height: "120px", top: "190px" }, 1000)
        // $(".content-lll-little-img").animate({ left: "34px", width: "450px", height: "190px", top: "195px" }, 1000)
        // $(".content-ll-little-img").animate({ right: "30px", width: "450px", height: "190px", top: "100px" }, 1000)
})