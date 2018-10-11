$(function () {

    // 资源位动画
    $(".part2 .detail-txt").animate({
        top: 145,
        opacity: 1
    }, 1000, function () {
        $(".p2-more").animate({
            opacity: 1
        }, 600, function () {
            $(".qzone").addClass("advScale"), setTimeout(function () {
                $(".qq").addClass("advScale")
            }, 250), setTimeout(function () {
                $(".wechat").addClass("advScale")
            }, 400), setTimeout(function () {
                $(".qnews").addClass("advScale")
            }, 650), setTimeout(function () {
                $(".qvideo").addClass("advScale")
            }, 700), setTimeout(function () {
                $(".friends").addClass("advScale")
            }, 850)
    })
});


    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if($(window).scrollTop()>20){
             // 更多资源 
            $(".part3 .detail-txt").animate({
                    top: 100,
                    opacity: 1
                }, 1500, function () {
                    $(".p3-more").animate({
                        opacity: 1
                    }, 800, function () {
                        $(".adv-bg").addClass("advBgScale"), $(".advres-list li").each(function (e, a) {
                            setTimeout(function () {
                                $(a).addClass("advResScale")
                            }, 150 * (e + 1))
                        })
                    })
            });
        
        }
    });
     
    // part4 动画
    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        if($(window).scrollTop()>900){
            $(".part4 .part4_1").animate({
                    opacity:0.8,
                },800,function(){
                    $(".part4_2").animate({
                        opacity:1,
                    },500,function () {
                        $(".part4_3").animate({
                            scale:1,
                            opacity:1,
                        },800)
                    })
            });
        }
    });

    
     // Part 5 微信小程序
     $('.clickB span').click(function(){
        // console.log("测试");
        var i = $(this).index();
        // console.log("当前索引",i);
        $(this).addClass("Pactive").siblings().removeClass('Pactive');
        $('.FB .causul').eq(i).show().siblings().hide();
        $('.FB .wei').eq(i).show().siblings().hide();
    });


})