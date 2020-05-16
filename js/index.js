window.addEventListener('load',function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction : 'vertical',
        pagination: {
            el:'.swiper-pagination',
        },
        mousewheel: true,
        on:{
            init: function(){
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this);
            }
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        }
    })
})
