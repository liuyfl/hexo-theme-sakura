$(function(){
	if($('.blog-nav-inner').offset().top>15)
		$('.blog-nav-inner').addClass('is-sticky');
	else
		$('.blog-nav-inner').removeClass('is-sticky');
	$(window).on('scroll',function(){
		if($('.blog-nav-inner').offset().top>15)
			$('.blog-nav-inner').addClass('is-sticky');
		else
			$('.blog-nav-inner').removeClass('is-sticky');
	})
	$('.popup-flower').click(function(){
		var img=$('.bg-flower').css('background-image');
		if(img!='none')
		{
			$('.bg-flower').css('background-image','none');
			$(this).find('.fa').removeClass('fa-eye').addClass('fa-eye-slash');
			localStorage.flower=false;
		}
		else
		{
			$('.bg-flower').css('background-image',"url('/images/flower.png')");
			$(this).find('.fa').removeClass('fa-eye-slash').addClass('fa-eye');
			localStorage.flower=true;
		}
	});
})