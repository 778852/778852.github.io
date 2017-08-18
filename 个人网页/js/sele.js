
	var num=0;
	setInterval(function(){
		num++;
		// let index=$(this).index();
		if(num==3){
			num=0;
		}
		$('.banner .banner-img').filter('.active').removeClass('active').end().eq(num).addClass('active');
	},3000);


	$('.box-word li').mouseover(function(){
		var index=$(this).index();
		$('.box-word li').filter('.active').removeClass('active').end().eq(index).addClass('active');
		$('.p-word li').filter('.active').removeClass('active').end().eq(index).addClass('active');
	});
	$(window).scroll(function(){
		var st=$(window).scrollTop();
		if(st>370){
			$('.left-bar').show(500);
		}else{
			$('.left-bar').hide(500);
		}
	});
	$('.btn').click(function(){
		var index=$(this).index();
		var ot=$('.container').eq(index).offset().top;
		$('.btn').filter('.active').removeClass('active').end().eq(index).addClass('active');
		$('html,body').animate({scrollTop:ot});
	});
	$(window).scroll(function(){
		var st=$(window).scrollTop();
		$('.container').each(function(index){
			if(st>=$(this).offset().top){
				$('.btn').filter('.active').removeClass('active').end().eq(index).addClass('active');
			}
		})
	});
	// $('#head').click(function(){
	// 	var st=$(window).scroll();
	// 	$('html,body').animate(st:0);
	// });