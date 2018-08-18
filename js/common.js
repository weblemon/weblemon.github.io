$(function(){

    $('.footer .back-btn').hide()
    var winHeight = window.innerHeight

    $(window).resize(function(){
        winHeight = window.innerHeight
    })
    $(document).scroll(function(e){
       if( $(this).scrollTop() > winHeight){
            $('.footer .back-btn').fadeIn()
       }else {
           $('.footer .back-btn').fadeOut()
       }
    })

    $('.footer .back-btn').click(function(){
        $(document.documentElement).animate({
            scrollTop:0
        })
    })
})