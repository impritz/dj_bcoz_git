$(function() {
    // var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	accordianLoad();


    var wh = $('#atom').height();
    if (typeof(wh.search) != 'undefined' && wh.search('%') != -1 || wh == 35) {
        $("#atom").css('width', (wh * 1 / 100 * h) + 'px');
    } else {
        $("#atom").width($('#atom').height() * 0.9);
    }
    if (w > 1300 && h > 600) {
        $('#atom').height(250);
        $('#atom').width(250);
    } else {
        // $('#displayBox').width(w * 0.3);
        // $('#displayBox').height(h * 0.6);
    }
    $('#atom').width($('#atom').height());
    var bt = (h - $('#atom').height()) / 2;
    var oof = $('#atom').height() * 0.2;
    $('#atom').css('top', bt);
    // $('#displayBox').css('top', (bt - 50) + 'px');
    var bl = $('#atom').css('left');
    if (bl == '0px')
        bl = '28%';
    if (bl.search('%') != -1) {
        bl = bl.substring(0, bl.length - 1);
        bl = (bl * w) / 100;
    }
    var dl = bl + $('#atom').width();
    // $('#displayBox').css('left', dl + 'px');
    var centreoffset = (w - (dl + 0 - bl)) / 2;
    $('#atom').css('left', centreoffset + 'px');
    // $('#displayBox').css('left', centreoffset + $('#atom').width() * 1.2 + 'px');
    // $('#displayBox p').height(248);
    $('.menutxt:not(#menutxt2)').hover(function() {
        $(this).fadeTo('fast', '1').css('color', "#093257");
    }, function() {
        $('.menutxt:not(#menutxt2)').fadeTo('fast', '0.6').css('color', "#999999");
    });
	/*
    $('#displayBox').hover(function() {
        $('.menutxt:not(#menutxt2)').fadeTo('fast', '0.3');
    }, function() {
        $('.menutxt:not(#menutxt2)').fadeTo('fast', '0.6');
    });
	*/
	/*Page BOTTOM Controls*/
    $('#nl').click(function() {
        anim(-1);
    });
    $('#nr').click(function() {
        anim(1);
    });
	$('#bk').click(function() {
        anim(0);
    });

    setTimeout(function() {
        $('#rightHand').animate({
            'marginRight': '-' + m + '%'
        }, 1500);
        $('#leftHand').animate({
            'marginLeft': '-' + m + '%'
        }, 1500, function() {
            $('#atom').fadeIn('slow', function() {
                $('#displayPic').fadeIn();
            });
        });
        $('.menutxt:not(#menutxt2)').fadeTo('2000', '0.6');
    }, 1000);

    $('.aPoints').click(function(e) {
        $('.agPoints').removeClass('agPoints');
        $('.vcon').removeClass('vcon').hide();
        //var a = $(e.currentTarget).index('.aPoints') + 1;
		var selectData = $(this).attr('data');
		$(e.currentTarget).addClass('agPoints');
		/*
		if($('#con' + selectData+' .indcontent').html().length >0){
			$('#con' + selectData+' .concontent, #cont #nl, #cont #nr').show();	
			$('#cont #bk').hide();
			$('#con' + selectData+' .indcontent').html('').hide();	
			scrollLoad();
		}*/
		
		if($('#con' + selectData+' .concontent').html().length ==0){
			var htmlText= "";
			for (var key in people){
				if(people[key].type==selectData){
					htmlText+='<div id="pic'+key+'"class="picHead" data="'+people[key].text.length+'" style="background: url(\''+people[key].image+'\') repeat scroll 0px 0px / 93px auto transparent;">';
					htmlText+='<div class="picContent"><img src="'+people[key].image+'" class="icon">';
					htmlText+='<div class="picText" style="text-align:center;"><label><b>'+people[key].name+'</b></label>'+'<br/><label>'+people[key].designation+'</label></div>';
					htmlText+='<p><br/>'+people[key].text+'</p></div></div>';
				}
			}
			$('#con' + selectData+' .concontent').html(htmlText);
			var picCnt = $('#con' + selectData+' .concontent .picHead').length;
			$('#con' + selectData+' .concontent').css("padding-left", 50-(picCnt*5.2)+"%"); 
			
			$('div.picHead').hover(function() {
				$('#displayMainInfo').html($(this).children('.picContent').children('.picText').html());
				$('#displayMainInfo').css("top",$('#displayPic').position().top+$('#displayPic').height()-5);
				$('#displayMainInfo').css("left",$(this).position().left+((w/100)*10));
				$('#displayMainInfo').fadeIn();
			}, function() {
				$('#displayMainInfo').fadeOut();
				// $('#displayMainInfo').html('');
			});
			
			$('div.picHead').click(function(e) {
				if($(this).attr('data') > 0){
					$('#displayBox .indcontent').html($(this).children('.picContent').html());
					scrollLoad();
					$('#displayBox').fadeIn();
				}
			});
			$('#displayBox .closeBtn').click(function(e) {
				 $('#displayBox').fadeOut();
				 $('#displayBox .indcontent').html('');
			});
			
			/*
			$('div.picHead').click(function(e){
				e.preventDefault();
				var htmlIndText= $(this).next('.listContent').html();
				$('#con' + selectData+' .concontent, #cont #nl, #cont #nr').hide();	
				$('#cont #bk').show();
				$('#con' + selectData+' .indcontent').html(htmlIndText).show();	
				scrollLoad();
			});
			accordianLoad();
			*/
		}
		$('#con' + selectData).fadeIn().addClass('vcon');
    });

	$('#atom #foun').trigger('click');
	scrollLoad();
	 
});

function accordianLoad() {
    /*
	$('.concontent').accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });

	$('.concontent').accordion("refresh");
	*/
}

function scrollLoad() {
	var scollHeight = $('#displayBox .indcontent').height();
	if (scollHeight > 320) {
        $($('#displayBox .indcontent')).slimScroll({
            height: '320px'
        });
    } else {
        $($('#displayBox .indcontent')).slimScroll({
            height: '320px'
        });
    }
}

$(window).resize(function() {
    $('body').css('overflow-x', 'scroll');
    $('body').css('overflow-y', 'scroll');
});

function anim(nav) {
    var e = -1;
    if (nav == 1) {
        if ($('.vcon').next().hasClass('con')) {
            e = $('.vcon').next().attr('id');
        } else {
            e = 'confounderbtn';
        }
    } else if (nav == -1) {
        if ($('.vcon').prev().hasClass('con'))
            e = $('.vcon').prev().attr('id');
        else
            e = 'conconsfellowbtn';
    } else if (nav == 0) {
        if ($('.vcon').next().hasClass('con')) {
            e = $('.vcon').attr('id');
        } else {
            e = 'confounderbtn';
        }
	}
    if (e == -1)
        return;
    $('.agPoints').removeClass('agPoints');
    $('.vcon').removeClass('vcon').hide();
    // $('#'+e).fadeIn();
	/*
    $('#' + e).fadeIn().addClass('vcon');
    var i = e.split('con')[1];
    i--;
    $('.aPoints:eq(' + i + ')').addClass('agPoints');
	*/
	var atomPoint = e.replace('con','');
	$('.aPoints[data='+atomPoint+']').trigger('click');
}

