$(function(){
    $('.work .tab .tab-content .tab-content-item').first().siblings().hide()
    function set(index){
        var _that = $('.work .tab .tab-content .tab-content-item')
        _that.eq(index).siblings().hide()
        _that.eq(index).fadeIn(1000)
    }
    $('.work .tab .tab-menu li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        set($(this).index())
    })
})

$(function() {
    var modal = $('.work .image-modal')
    modal.hide()
    $('.work .image-list .image').mouseover(function(){
        $(this).find('.image-modal').fadeIn().mouseout(function(){
            $(this).stop().fadeOut()
        })
    })
})