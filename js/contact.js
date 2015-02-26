$(function() {	
	$('.menutxt:not(#menutxt7)').hover(function(){
		$(this).fadeTo('fast','1').css('color',"#093257");
	},function () {
		$('.menutxt:not(#menutxt7)').fadeTo('fast','0.6').css('color',"#999999");
	});
	$('.carrersDisplayContent').hover(function(){
		$('.menutxt:not(#menutxt7)').fadeTo('fast','0.3');
	},function(){
		$('.menutxt:not(#menutxt7)').fadeTo('fast','0.6');
	});

	setTimeout(function(){
		$('#rightHand').animate({'marginRight':'-'+m+'%'},1500);
		$('#leftHand').animate({'marginLeft':'-'+m+'%'},1500,function(){
			$('.carrersDisplayContent').fadeIn('slow');
		});
		$('.menutxt:not(#menutxt7)').fadeTo('2000','0.6');
	},1000);
});

$(window).resize(function() {
  $('body').css('overflow-x','scroll');
  $('body').css('overflow-y','scroll');
});