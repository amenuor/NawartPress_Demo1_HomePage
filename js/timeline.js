$(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');
	
	$('.over').each(function(index){
		var elem = $(this);
		elem.mouseenter(function(){$(this).fadeOut()});
		elem.parent().mouseleave(function(){elem.fadeIn()});
	});
		
	//hide timeline blocks which are outside the viewport
	$('#train').hide();
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				$('#train').show();
				$('#train').animate({top: $(this).position().top }, 2000);
			}
		});
	});
});