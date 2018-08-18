$(function(){
	
	
	// 处理按钮效果
	$('.services .btns .arrow-btn').click(function(){
		$(this).siblings().removeClass('active')
		$(this).hide()
		$(this).stop().fadeIn()
		$(this).addClass('active')
	})
	
	// 处理按钮移上去的效果
	$('.services .btns .arrow-btn').mouseover(function(){
		$(this).hide()
		$(this).stop().fadeIn(300)
	})
	
	
	// 切换上一个
	function prev(){
		var list = $('.services .list')
			list.stop().animate({
				left: -list.width() / 4
			},function(){
				list.css({
					left:0
				})
				list.append(list.children().eq(0))
			})
			
			
	}

	// 切换下一个
	function next(){
		var list = $('.services .list')
			list.prepend(list.children().last())
			
			list.css({
				left:-list.width() / 4
			})
			
			list.stop().animate({
				left: 0
			})
	}
	
	// 列表切换效果
	$('.services .btns .arrow-btn').click(function(){
		var index = $(this).attr('index')
		if(index === '0'){
			prev();
		} else if(index === '1'){
			next();
		}
	})

	function outLineIconToggle(el){
		var src2 = el.find('img').attr('src2')
		var src = el.find('img').attr('src')
		el.find('img').attr('src2',src)
		el.find('img').attr('src',src2)
	}

	$('.services .list .common-outline-icon').click(function(){
		$(this).toggleClass('active')
		outLineIconToggle($(this))
		var siblings = $(this).parent().parent().siblings()
		var activeEl = siblings.find('.common-outline-icon.active')
		activeEl.removeClass('active')
		outLineIconToggle(activeEl)
	})

})