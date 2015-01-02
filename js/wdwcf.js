$(function() {
	// var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	$('.nerve').width($('.nerve').height());
	$('#menubutton').width($('#menubutton').height()).css('left',(w-$('#menubutton').width())/2);
	var wh=$('#brain').height();
	if(typeof(wh.search)!='undefined'&&wh.search('%')!=-1||wh==60){
    $("#brain").css('width',(wh/100*h)+'px');
    }
    else{
        $("#brain").width($('#brain').height()*0.85);
    }
    if(w>1300 && h> 600){
        $('#brain').height(480);
        $('#brain').width(450);
    }
    else{
    	$('#displayBox').width(w*0.4);
        $('#displayBox').height(h*0.4);
    }
	var bt=(h-$('#brain').height())/2;
	var oof=$('#brain').height()*0.2;
	$('#brain').css('top',bt);
	$('#displayBox').css('top',(bt+oof)+'px');
	var bl=$('#brain').css('left');
	if(bl=='0px')
	bl='15%';
	if(bl.search('%')!=-1){
		bl=bl.substring(0,bl.length-1);
		bl=(bl*w)/100;
	}
	var dl=bl+$('#brain').width()*0.60;
	$('#displayBox').css('left',dl+'px');
	var centreoffset= (w-(dl+$('#displayBox').width()-bl))/2;
	// console.log(centreoffset,(dl+$('#displayBox').width()),bl);
	$('#brain').css('left',centreoffset+'px');
	$('#displayBox').css('left',centreoffset+$('#brain').width()*0.60+'px');

	$('#insight,#temprament,#foresight,#value,#highsight').click(function(e){
		$('.bgPoints').addClass('bPoints').removeClass('bgPoints');
		if(!$(e.currentTarget).hasClass('nerve'))
		$(e.currentTarget).removeClass('bPoints').addClass('bgPoints');	
		if(e.currentTarget.id=="value"){
			$('#displayBox #title label').html('VALUE');
			$('#displayBox p').hide();
			$('#displayBox p').html('<b>Equality:</b> We level the gap of un-equality in society through technology derivatives.<br><b>Reliability:</b> Prescriptive and predictive dimensioning which stands the test of time and space.<br><b>Inclusive:</b>  Knowledge of Normal and Knowledge of Para-Normal amalgamated to produce usability and utility.').fadeIn();
		}
		else if(e.currentTarget.id=="temprament"){
			$('#displayBox #title label').html('TEMPRAMENT');
			$('#displayBox p').hide();
			$('#displayBox p').html('We enquire the obvious and non-obvious presence and absence in our daily steps. We feel quenched by accuracy and utility not by more or less.').fadeIn();
		}
		else if(e.currentTarget.id=="foresight"){
			$('#displayBox #title label').html('FORESIGHT');
			$('#displayBox p').hide();
			$('#displayBox p').html(' State change and characterization of material properties should have causal relationship to actor element interaction attributes.').fadeIn();
		}
		else if(e.currentTarget.id=="insight"){
			$('#displayBox #title label').html('INSIGHT');
			$('#displayBox p').hide();
			$('#displayBox p').html('Goal shifts, because unknown exists.').fadeIn();
		}
		else if(e.currentTarget.id=="highsight"){
			$('#displayBox #title label').html('HINDSIGHT');
			$('#displayBox p').hide();
			$('#displayBox p').html('Effect or Efficacy is manifestation of various earlier events recognized, steered, captured and processed across multiple dimensions.').fadeIn();
		}
		$('#displayBox').data('current',e.currentTarget.id);
	});
	$('.menutxt:not(#menutxt1)').hover(function(){
		$(this).fadeTo('fast','1').css('color',"#093257");
	},function () {
		$('.menutxt:not(#menutxt1)').fadeTo('fast','0.6').css('color','#999999');
	});
	$('#displayBox').hover(function(){
		$('.menutxt:not(#menutxt1)').fadeTo('fast','0.3');
	},function(){
		$('.menutxt:not(#menutxt1)').fadeTo('fast','0.6');
	});
	$('#nl').click(function(){
		ani(-1);
	});
	$('#nr').click(function(){
		ani(1);
	});
	$('#insight').trigger('click');
	setTimeout(function(){
		$('#rightHand').animate({'marginRight':'-'+m+'%'},1500);
		$('#leftHand').animate({'marginLeft':'-'+m+'%'},1500,function(){
			$('#brain').fadeIn('slow',function(){
				$('#displayBox').fadeIn();
			});
		});
		$('.menutxt:not(#menutxt1)').fadeTo('2000','0.6');
	},1000);
});
function ani(nav){
	if(nav==1){
	if($('.bgPoints').next().hasClass('bPoints'))
	$('.bgPoints').next().trigger('click');
	else
	$('#insight').trigger('click');
	}
	else if(nav==-1){
		if($('.bgPoints').prev().hasClass('bPoints'))
	$('.bgPoints').prev().trigger('click');
	else
	$('#highsight').trigger('click');
	}
}
$(window).resize(function() {
  $('body').css('overflow-x','scroll');
  $('body').css('overflow-y','scroll');
});