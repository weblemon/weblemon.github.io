$(function(){
    var index = 2;

    // 监听index 下标的变化
    function set(num){
        animateImage(num)
    }

    $('.testimonials .btns .btns-btn').click(function(){
        set($(this).index())
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    function next(){
        var imgs =  $('.testimonials .pics')
        var children =  imgs.children()
        imgs.append(children.eq(0))
        children.eq(1).addClass('hidden')
        children.eq(2).removeClass('col-xs-6').addClass('col-xs-3')
        children.eq(3).removeClass('col-xs-3').addClass('col-xs-6')
        children.eq(4).removeClass('hidden')
    }

    function prev(){
        var imgs =  $('.testimonials .pics')
        var children =  imgs.children()
        imgs.prepend(children.eq(4))
        children.eq(0).removeClass('hidden')
        children.eq(1).removeClass('col-xs-3').addClass('col-xs-6')
        children.eq(2).removeClass('col-xs-6').addClass('col-xs-3')
        children.eq(3).addClass('hidden')
    }


    function animateImage(num) {
        if(num > index) { // 下一张
            next()
        }else if(num < index) { // 上一张
            prev()
        }
        index = num
    }
})


$(function(){
    function prev(){ // 上一张
       var swiperItem = $('.team .swiper .swiper-item')
       var item = $('.team .swiper .swiper-item .item')
       swiperItem.prepend(item.last())
       swiperItem.css({
           left: -(item.first().width())
       })

       swiperItem.stop().animate({
           left:0
       })
    }

    function next(){ // 下一张
        var swiperItem = $('.team .swiper .swiper-item')
        var item = $('.team .swiper .swiper-item .item')
        swiperItem.append(item.first())
        swiperItem.css({
            left: item.first().width()
        })
        swiperItem.stop().animate({
            left:0
        })
    }

    $('.team .swiper .swiper-btn button').click(function(){
        var btn = $(this).index()
        if(btn === 0){
            prev()
        }else if(btn === 1) {
            next()
        }
    })
})