$(function(){

     var $li=$('.headnav>li').children('a')
     for(var i=0;i<$li.length;i++){
         $li.eq(i).mouseenter(function(){
                    $(this).siblings().slideDown().find('a').mouseenter(function(){
                        $(this).addClass('active')
                    })
                    .mouseleave(function(){
                        $(this).removeClass('active')
                    })
         })
         .parent('li').mouseleave(function(){
             $(this).children('a').siblings().slideUp()
            $(this).find('.lineleft').animate({width:0},1000)
            $(this).find('.lineright').animate({width:0},1000)

         })
     }
     $('.follow-weixin').mouseenter(function(){
         $('.wpic').show()
     })
     .mouseleave(function(){
        $('.wpic').hide()
     })

       

    
})