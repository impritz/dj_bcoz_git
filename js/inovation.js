$(function() {
    // var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	$('#vman').width($('#vman').height());
	$('.nerveng').width($('.nerveng').height());
    $('.elements').width($('.elements').height());
    $('.gelements').width($('.gelements').height());
     
    $('.elements span,.gelements span').hide();
    var wh=$('#vman').height();
    if(typeof(wh.search)!='undefined'&&wh.search('%')!=-1||wh==55){
    $("#isol").css('width',(wh/100*h)+'px');
    }
    else{
        $("#vman").width($('#vman').height()*1);
    }
    if(w>1300 && h> 500){
        $('#isol').height(380);
        $('#isol').width(380);
    }

    $('#sect').click(function(){
        $('.selcolor').removeClass('selcolor');
        $('#sect').addClass('selcolor');
        $('.elements').removeClass('elements').addClass('gelements')
        $('#tech').fadeOut();
        $('#sector').fadeIn();
        // aniamteSector();
    });
    $('#plt').click(function(){
        $('.selcolor').removeClass('selcolor');
        $('#plt').addClass('selcolor');
        $('#sector').fadeOut();
        $('#tech').fadeIn();
        
        // aniamtePlatform();
    });
    
    $('.menutxt:not(#menutxt4)').hover(function(){
		$(this).fadeTo('fast','1').css('color',"#093257");
	},function () {
		$('.menutxt:not(#menutxt4)').fadeTo('fast','0.6').css('color',"#999999");
	});
	setTimeout(function(){
		$('#rightHand').animate({'marginRight':'-'+m+'%'},1500);
        $('#leftHand').animate({'marginLeft':'-'+m+'%'},1500,function(){
			$('#vman').css('left',(w-$('#vman').width())/2+ 'px').hide();
			$('#vman').fadeIn('slow',function(){
			aniamteboth();
			});
		});
		$('.menutxt:not(#menutxt4)').fadeTo('2000','0.6');
	},1000);
});
$(window).resize(function() {
  $('body').css('overflow-x','scroll');
  $('body').css('overflow-y','scroll');
});
function aniamteboth(){
 $('.elements span').hide();
    var y=($('#vman').height()/2)-($('.elements').height()/2);
    var x=($('#vman').width()/2)-($('.elements').width()/2);
    var r =$('#vman').width()/2;
    var time=2000;
    var arc_params = {
    center: [x,y],
        radius: r,    
        start: 180,
        end: 230,
        dir: +1
    };
    $("#bcomp").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=253.75;
    $("#abdc").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=277.5;
    $("#einc").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=301.25;
    $("#oddlm").animate({path : new $.path.arc(arc_params)},time);
    var arc_params = {
    center: [x,y],
        radius: r,    
        start: 180,
        end: 130,
        dir: -1
    };
    $("#energy").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=106.25;
    $("#home").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=82.5;
    $("#healthCare").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=58.75;
    $("#retail").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=35;
    $("#automotive").animate({path : new $.path.arc(arc_params)},time);
    $('.elements span,.gelements span').fadeTo(time,1);

}
function aniamtePlatform(){
    $('.elements span').hide();
    var y=($('#vman').height()/2)-($('.elements').height()/2);
    var x=($('#vman').width()/2)-($('.elements').width()/2);
    var r =$('#vman').width()/2;
    var time=2000;
    var arc_params = {
    center: [x,y],
        radius: r,    
        start: 180,
        end: 230,
        dir: +1
    };
    $("#bcomp").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=253.75;
    $("#abdc").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=277.5;
    $("#einc").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=301.25;
    $("#oddlm").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=325;
    $("#patp").animate({path : new $.path.arc(arc_params)},time);
    $('#ntech','#stech','#itech','#artech','#ictech').css('right',x+'px');
    var arc_params = {
    center: [x,y],
        radius: r,    
        start: 180,
        end: 130,
        dir: -1
    };
    $("#ntech").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=106.25;
    $("#stech").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=82.5;
    $("#itech").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=58.75;
    $("#artech").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=35;
    $("#ictech").animate({path : new $.path.arc(arc_params)},time);
    $('.elements span').fadeTo(time,1);
}
function wInP(a){
    return $('#vman').height()*a/100;
}
function aniamteSector(){
    $('.elements span').hide();
    var y=($('#vman').height()/2)-($('.elements').height()/2);
    var x=($('#vman').width()/2)-($('.elements').width()/2);
    var r =$('#vman').width()/2;
    var time=2000;
    var arc_params = {
    center: [x,y],
        radius: r,    
        start: 180,
        end: 130,
        dir: -1
    };
    $("#energy").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=106.25;
    $("#home").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=82.5;
    $("#healthCare").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=58.75;
    $("#retail").animate({path : new $.path.arc(arc_params)},time);
    arc_params.end=35;
    $("#automotive").animate({path : new $.path.arc(arc_params)},time);
        $('.elements span').fadeTo(time,1);
}