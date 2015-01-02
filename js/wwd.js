$(function() {
	// var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	$('.nerve').width($('.nerve').height());
	$('.dp').width($('.dp').height());
	$('.aPoints').width(30);
	$('.aPoints').height($('.aPoints').width());
	$('#menubutton').width($('#menubutton').height()).css('left',(w-$('#menubutton').width())/2);


	var wh=$('#isol').height();
	$('#isol').width($('#isol').height()*1.13);
	if(typeof(wh.search)!='undefined'&&wh.search('%')!=-1||wh==45){
    $("#isol").css('width',(wh*1.13/100*h)+'px');
    }
    else{
        $("#isol").width($('#isol').height()*1.13);
    }
    if(w>1300 && h> 600){
        $('#isol').height(380);
        $('#isol').width(439.4);
    }else{
    	$('#displayBox').width(w*0.4);
        // $('#displayBox').height(h*0.4);
    }
	var bt=(h-$('#isol').height())/2;
	var oof=$('#isol').height();
	$('#isol').css('top',bt);
	$('#displayBox').css('top',(bt)+'px');
	var bl=$('#isol').css('left');
	if(bl=='0px')
	bl='25%';
	if(bl.search('%')!=-1){
		bl=bl.substring(0,bl.length-1);
		bl=(bl*w)/100;
	}
	var dl=bl+$('#isol').width()*0.60;
	$('#displayBox').css('left',dl+'px');
	var centreoffset= (w-(dl+$('#displayBox').width()-bl))/2;
	$('#isol').css('left',centreoffset+'px');
	$('#displayBox').css('left',centreoffset+$('#isol').width()*0.65+'px');
	$('#displayBox p').height(250);
	$('#re,#arch,#pro,#pcd').click(function(e){
		$('.dgPoints').addClass('dPoints').removeClass('dgPoints');
		if(!$(e.currentTarget).hasClass('nerve'))
		$(e.currentTarget).removeClass('dPoints').addClass('dgPoints');	
		if(e.currentTarget.id=="re"){
			$('#displayBox #title').html('RESEARCH');
			$('#displayBox p').hide();
			$('#displayBox p').html('<b>Equality:</b> We level the gap of un-equality in society through technology derivatives.<br><b>Reliability:</b> Prescriptive and predictive dimensioning which stands the test of time and space.<br><b>Inclusive:</b>  Knowledge of Normal and Knowledge of Para-Normal amalgamated to produce usability and utility.<br>').fadeIn();
		}
		else if(e.currentTarget.id=="arch"){
			$('#displayBox #title').html('PRODUCT RE ENGINEERING');
			$('#displayBox p').hide();
			$('#displayBox p').html('<ul><li>We analyse the existing product features and gaps</li><li>We Identify & qualify the underpinning technology that forms the building block</li><li>We alternate with more efficient, effective and economical tools and techniques to reengineer the product</li></ul><br>Product Type:<ul><li>Consumer Passive Products</li><li>Electronics Active Products : Integrated Computing device, Solution on Chips , Embedded Software Industries ranging from Telecom to Packaging</li><li>Business Products (Business and Operational software and hardware based solutions.)</li></ul><br>').fadeIn();
		}
		else if(e.currentTarget.id=="pro"){
			$('#displayBox #title').html('PROCESS DESIGN');
			$('#displayBox p').hide();
			$('#displayBox p').html('<ul><li>User interaction Model</li><li>Service Design</li><li>Technology Solution Design</li><li>Value Chain Design</li></ul>').fadeIn();
		}
		else if(e.currentTarget.id=="pcd"){
			$('#displayBox #title').html('NEW BUSINESS DESIGN');
			$('#displayBox p').hide();
			$('#displayBox p').html('<ul><li>Waste-to-Wealth Design</li><li>Transformation and change Design</li></ul><br><span>We study your Business and Operational process, we pick up the cost center and suggest which can be converted to profit center, and we also identify the market through primary and secondary research.</span><br>').fadeIn();
		}
		$('#displayBox').data('current',e.currentTarget.id);
	});
	$('#arch').trigger('click');
	setTimeout(function(){
		$('#rightHand').animate({'marginRight':'-'+m+'%'},1500);
		$('#leftHand').animate({'marginLeft':'-'+m+'%'},1500,function(){
			$('#isol').fadeIn('slow',function(){
				$('#displayBox').fadeIn();
			});
		});
		$('.menutxt:not(#menutxt3)').fadeTo('2000','0.6');
	},1000);
	$('.menutxt:not(#menutxt3)').hover(function(){
		$(this).fadeTo('fast','1').css('color',"#093257");
	},function () {
		$('.menutxt:not(#menutxt3)').fadeTo('fast','0.6').css('color',"#999999");
	});
	$('#displayBox').hover(function(){
		$('.menutxt:not(#menutxt3)').fadeTo('fast','0.3');
	},function(){
		$('.menutxt:not(#menutxt3)').fadeTo('fast','0.6');
	});
		$('#nl').click(function(){
		anim(-1);
	});
	$('#nr').click(function(){
		anim(1);
	});
	$('#displayBox p').slimScroll({
        height: '250px'
    });

});

$(window).resize(function() {
  $('body').css('overflow-x','scroll');
  $('body').css('overflow-y','scroll');
});
function anim(nav){
	if(nav==1){
	if($('.dgPoints').next().hasClass('dPoints'))
	$('.dgPoints').next().trigger('click');
	else
	$('#arch').trigger('click');
	}
	else if(nav==-1){
		if($('.dgPoints').prev().hasClass('dPoints'))
	$('.dgPoints').prev().trigger('click');
	else
	$('#pcd').trigger('click');
	}
}
