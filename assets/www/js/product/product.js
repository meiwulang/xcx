$(function() {
	//初始化
	var i = 0;
	var industrytoWith = $(".industry_tobox ul li").width();
	var imgLento = $(".industry_tobox ul li").length - 6;
	$(".industry_tobox li").eq(0).find(".industryline").addClass("active");
	var codImgurl = $(".industry_tobox li").eq(0).find(".industryImg").css("background-image");
    codImgurl = codImgurl.substring(5, codImgurl.length-2);

	var voName = $(".industry_tobox li").eq(0).find(".industryTxt").html();
	$(".codeboxmi p").html(voName);
	$(".codeboxmi img").attr({"src":codImgurl});







	//顶部行业code轮播
	function autoPlay1() {
		$(".industry_tobox ul").stop().animate({
			"left": i * industrytoWith * (-1) + "px"
		})

	}
	$(".industry_to .btnright").click(function(){
		if(i<imgLento){
			i++;
			autoPlay1();
		}
	});
	$(".industry_to .btnleft").click(function(){
		if(i>0){
			i--;
			autoPlay1();
		}
	});
	$(".industry_tobox li").click(function(){
		var oIndex = $(this).index();
		$(".industry_tobox li").eq(oIndex).find(".industryline").addClass("active");
		$(".industry_tobox li").eq(oIndex).siblings().find(".industryline").removeClass("active");
		codImgurl = $(".industry_tobox li").eq(oIndex).find(".industryImg").css("backgroundImage"); 

        codImgurl = codImgurl.substring(5, codImgurl.length-2);
        $(".codeboxmi img").attr({"src":codImgurl});
		voName = $(".industry_tobox li").eq(oIndex).find(".industryTxt").html();
		$(".codeboxmi p").html(voName);
		var id = $(this).data("id");
		var html = "";
		if(window.newList[id]){
			for(var i in window.newList[id]){
				html += "<li><img src='" +window.newList[id][i] + "' style='width: 270px;max-height: 485px;'></li>"
			}
		}
		$(".industry_bobox").find("ul").html(html);
	});

    $(".industry_tobox li").eq(0).click();
//展示页面轮播
	var j = 0;
	var industryboWith = $(".industry_bobox ul li").width() + 24;
	var imgLenbo = $(".industry_tobox ul li").length - 3;
	function autoPlay2() {

		$(".industry_bobox ul").stop().animate({
			"left": j * industryboWith * (-1) + "px"
		})

	}
	$(".industry_bo .btnrightbox").click(function(){
		if(j<imgLenbo){
			j++;
			autoPlay2();

		}
	});
	$(".industry_bo .btnleftbox").click(function(){
		if(j>0){
			j--;
			autoPlay2();

		}
	});


})