$(function() {
	// var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	$('.nerve').width($('.nerve').height());
	$('.dp').width($('.dp').height());
	$('.aPoints').width(30);
	$('.aPoints').height($('.aPoints').width());
	$('#menubutton').width($('#menubutton').height()).css('left',(w-$('#menubutton').width())/2);

/*Moved to CSS
	var wh = $('#isol').height();
    if (typeof(wh.search) != 'undefined' && wh.search('%') != -1 || wh == 35) {
        $("#isol").css('width', (wh * 1 / 100 * h) + 'px');
    } else {
        $("#isol").width($('#isol').height() * 0.9);
    }
    if (!(w > 1300 && h > 600)) {
        $('#displayBox').width(w * 0.3);
        $('#displayBox').height(h * 0.6);
    }
    $('#isol').width($('#isol').height());
    var bt = (h - $('#isol').height()) / 2;
    var oof = $('#isol').height() * 0.2;
    $('#isol').css('top', bt);
    $('#displayBox').css('top', (bt*0.8108) + 'px');
    var bl = $('#isol').css('left');
    if (bl == '0px')
        bl = '28%';
    if (bl.search('%') != -1) {
        bl = bl.substring(0, bl.length - 1);
        bl = (bl * w) / 100;
    }
    var dl = bl + $('#isol').width();
    //$('#displayBox').css('left', dl + 'px');
    var centreoffset = (w - (dl + $('#displayBox').width() - bl)) / 2;
    $('#isol').css('left', centreoffset + 'px');
    $('#displayBox').css('left', (centreoffset + $('#isol').width() * 1.2) * 0.9697 + 'px');
    $('#displayBox .mainDisplayContent p.paraContent').height(248);
*/
	$('#isol .dPoints').click(function(e){
		$('#displayBox .icon').attr("src","");
		$('.dgPoints').removeClass('dgPoints');
		if(!$(e.currentTarget).hasClass('nerve'))
		$(e.currentTarget).addClass('dgPoints');	
		for (var key in products){
				if(products[key].type==e.currentTarget.id){
					$('#displayBox #title label').html(products[key].title);
					$('#displayBox .icon').attr("src",products[key].image);
					$('#displayBox .mainDisplayContent p.paraContent').html(products[key].text).fadeIn();
				}
		}
		$('#displayBox').data('current',e.currentTarget.id);
	});
	$('#prod1').trigger('click');
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
	$('#displayBox .mainDisplayContent').slimScroll({
        height: '250px'
    });
	
	$('#displayBox .zoomCtrl').height($('#displayBox img.icon').height());
	$('#displayBox .zoomCtrl').width($('#displayBox img.icon').width());
	$('#displayBox .zoomCtrl').css('top',$('#displayBox .img.icon').css('top')-4);
	var zoomCtrlWidth = $('#displayBox').width() - $('#displayBox .imageContent div.zoomCtrl').width();
	var imgPagRight = $('#displayBox .imageContent').css('padding-right');
	    zoomCtrlWidth = zoomCtrlWidth - imgPagRight.substr(0,imgPagRight.indexOf("p"));
	$('#displayBox .imageContent div.zoomCtrl').css('left',zoomCtrlWidth);
	$('#displayBox .imageContent div.zoomCtrl').css('top',20);
	//For Hovering of the Content
	$('#displayBox .imageContent img').mouseover(function(){
		$(this).parent().find("div.zoomCtrl").show();
	});
	$('#displayBox .imageContent .zoomCtrl').mouseleave(function(){
		$(this).parent().find("div.zoomCtrl").hide();
	});
	$('#popUp').cosyModal();
	$('#displayBox .zoomCtrl').click(function(){
		$('#popUp h1').html($('#displayBox #title label').html());
		$('#popUp img').attr("src",$('#displayBox .icon').attr("src"));
		$('#popUp p').html($('#displayBox .mainDisplayContent p.paraContent').html());
		$('#popUp').cosyModal();
		$('#popUp').width("80%")//.height("80%");
		$('#popUp').cosyModal('show');
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
	$('#prod1').trigger('click');
	}
	else if(nav==-1){
		if($('.dgPoints').prev().hasClass('dPoints'))
	$('.dgPoints').prev().trigger('click');
	else
	$('#pcd').trigger('click');
	}
}

var products = [
//		TYPE 1
		{"type": "prod1",
        "title": "360&deg; IoT Corroborative Broker&#8482;",
        "image": "images/products/cube.png",
        "text": "<ul> <li>Cloud based Software defined Self Organizing session Broker </li> <li>Adaptive Routing </li> <li>Network agnostic to attain QoS</li> <li>Device agnostic</li> <li>Intertwine of structured and non structured data from various data source</li> <li>IoT generated transaction, presentation and end point data  for real time collaboration to actionable intelligence.</li> <li>Enables auto provisioning, insertion and extraction of data event based.</li> </ul> <br/><q style='color: rgb(255, 102, 0);'>This proprietary technology is being developed for To be launched BCausE  TeleHealth Business solution....</q> <br/> To know & partner get in touch with us. "}
//		TYPE 2
		,{"type": "prod2",
        "title": "PoD&#8482; : Platform on  device",
        "image": "images/products/device.png",
        "text": "<ul> <li>An integrated multi sensory device</li> <li>Embedded software and hardware based product</li> <li>Wireless secure communication through MANET</li> <li>Stream and spool data from and to authenticated device</li> </ul><br/><q style='color: rgb(255, 102, 0);'>This proprietary technology is being developed for To be launched BCausE  TeleHealth Business solution....</q> <br/>To know & partner get in touch with us."}
		];