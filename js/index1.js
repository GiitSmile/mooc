/**
 * Created by Administrator on 2016/10/19.
 */
// banner
var key=0;
var timer;

var nextFn=function(){
    key++;
    if (key>3) {key=0};
    $('.banner-dots span').eq(key).addClass('active').siblings().removeClass('active');

    $('.banner-content div').eq(key).stop().fadeIn().siblings().fadeOut();

};

var prevFn=function(){
    key--;
    if (key<0) {key=3};
    $('.banner-dots span').eq(key).addClass('active').siblings().removeClass('active');

    $('.banner-content div').eq(key).stop().fadeIn().siblings().fadeOut();

}

$('.next').click(nextFn);
$('.prev').click(prevFn);

timer=setInterval(nextFn,2000);

$('.banner-content').hover(function() {
    clearInterval(timer);
}, function() {
    clearInterval(timer);
    timer=setInterval(nextFn,2000);
});

$('.banner-dots span').click(function(event) {
    var x=$(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.banner-content div').eq(x).stop().fadeIn().siblings().fadeOut();
    key=x;
});
