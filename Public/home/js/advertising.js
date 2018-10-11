$(function() {
    $(".subject-area a").mouseover(function() {
        var li = $("a").index($(this));
        $("a").eq(li).stop().animate({ marginTop: '-8px' }, 500)
            // $("li").eq(li).css("margin-top", "-4px")
        $("a").eq(li).css("box-shadow", "0px 0px 30px rgba(178,178,178,0.3)")

    })
    $(".subject-area a").mouseout(function() {
        $("a").stop().animate({ marginTop: "0px" }, 500);
        // $("li").css("margin-top", "0")
        $("a").css("box-shadow", "0px 0px 0px #fff")
    })
    $(".area2 a").mouseover(function() {
        var li = $("a").index($(this));
        $("a").eq(li).stop().animate({ marginTop: '-8px' }, 500)
            // $("li").eq(li).css("margin-top", "-4px")
        $("a").eq(li).css("box-shadow", "0px 0px 30px rgba(178,178,178,0.3)")

    })
    $(".area2 a").mouseout(function() {
        $("a").stop().animate({ marginTop: "0px" }, 500);
        // $("li").css("margin-top", "0")
        $("a").css("box-shadow", "0px 0px 0px #fff")
    })
})