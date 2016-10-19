/**
 * Created by LiMuyang on 2016/10/18.
 */

$(document).ready(function () {
    $(".banner-content div").first().addClass("slide-active").fadeIn(800);
    $(".search-input").focus(function () {

        $(".search-area-result").stop().slideDown(200);
    });
    $(".search-input").blur(function () {

        $(".search-area-result").stop().slideUp(200);
    });


    var banner=$(".banner-pr"),
    slides = banner.find(".banner-slide"),
    total = slides.length,
    index =0,
    interval = 5000,
    timer = null;

    function changePics() {
        $(".banner-dots span").click(function () {
            $(this).addClass("active").siblings("span").removeClass("active");
            //获取当前被点击的index
            var currentindex = $(".banner-dots span").index(this);
            mCurrentIndex = currentindex;
            if (currentindex != index) {
                $(".banner-content div").eq(index).removeClass("slide-active").stop().fadeOut(600);
                $(".banner-content div").eq(currentindex).addClass("slide-active").stop().fadeIn(800);
                index = currentindex;
            }
        });
    }

    function show(i){
        var cur = slides.filter('.slide-active');

        slides.stop(true, true);

        cur.removeClass('slide-active').fadeOut(600);

        slides.eq(i).addClass('slide-active').fadeIn(800);
        $(".banner-dots span").eq(i).addClass("active").siblings("span").removeClass("active");
    }

    //前一张
    var clickPrev=function(){
        index--;

        index = index < 0 ? total - 1 : index;

        show(index);
    };
    var clickNext=function(){
        index++;
        index = index > total - 1 ? 0 : index;
        show(index);

    }

    function autoPlay() {
        if (timer)
            clearInterval(timer);

        timer=setInterval(function () {
            clickNext();
        },interval);
    }

    $(".menuContent .item").mouseover(function () {
        $(".submenu").hide();
        var selector = $(this).attr("data-id");
        $("."+selector).show();
    }).mouseleave(function () {
        $(".submenu").hide();
    })



    $(".prev").click(clickPrev);
    $(".next").click(clickNext);

    changePics();

    banner.on('mouseenter', function(e){
        if(timer) clearInterval(timer);
    }).on('mouseleave', function(e){
        autoPlay();
    });
    autoPlay();
});

