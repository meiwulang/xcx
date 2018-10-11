$(function() {

    $(window).scroll(function() {
        //注意：两个样式值的获取都是方法形式。
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 198) {
              $(".icon-bg").addClass("advScale")
               setTimeout(function() {
                    $(".icon-top").addClass("iconTOP")
                }, 800)
                 setTimeout(function() {
                    $(".icon-mid").addClass("iconMid")
                }, 1600)
                setTimeout(function() {
                    $(".icon-bot").addClass("iconBot")
                }, 2000)
            $(".icon-img1").animate({ left: "266px", height: "113px", width: "420px", top: "52px", left: "444px" }, 1000, function() {
                setTimeout(function() {
                    $(".icon-img2").animate({ left: "266px", height: "113px", width: "420px", top: "192px", left: "444px" }, 1000, )
                }, 0)

                setTimeout(function() {
                    $(".icon-img3").animate({ left: "266px", height: "113px", width: "420px", top: "335px", left: "444px" }, 1000, )
                }, 600)
                
               
               
            })
        }
    })


    $('.content-bottom-tab li').click(function() {
        // console.log($(".content-bottom-tab li").index(this))
        // console.log($(this).index());
        var li = $(this).index();
        $(".content-bottom-tab li").eq(li).addClass("acrion").siblings().removeClass("acrion");
        $(".content-bottom-tab div").eq(li).show().siblings("div").hide();

    })


})