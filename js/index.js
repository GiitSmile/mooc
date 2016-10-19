/**
 * Created by LiMuyang on 2016/10/18.
 */

$(document).ready(function () {
    $(".banner-content div").first().addClass("slide-active").fadeIn(1000);
    $(".search-input").focus(function () {

        $(".search-area-result").stop().slideDown(200);
    });
    $(".search-input").blur(function () {

        $(".search-area-result").stop().slideUp(200);
    });


    function changePics() {
        var index = 0;
        $(".banner-dots span").click(function () {
            $(this).addClass("active").siblings("span").removeClass("active");
            //获取当前被点击的index
            var currentindex = $(".banner-dots span").index(this);
            if (currentindex != index) {
                $(".banner-content div").eq(index).removeClass("slide-active").stop().fadeOut(1000);
                $(".banner-content div").eq(currentindex).addClass("slide-active").stop().fadeIn(1000);
                index = currentindex;
            }
        })
    }

    changePics();

});

