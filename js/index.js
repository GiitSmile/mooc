/**
 * Created by LiMuyang on 2016/10/18.
 */

$(document).ready(function () {
    $(".search-input").focus(function () {

        $(".search-area-result").stop().slideDown(200);
    });
    $(".search-input").blur(function () {

        $(".search-area-result").stop().slideUp(200);
    });


});

