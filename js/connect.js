$(function() {
	// var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
	/*//COMMENTING THE HEIGHT & WIDTH LOGIC
	$('.nerve').width($('.nerve').height());
	$('.cpnerve').width($('.cpnerve').height());
	$('#menubutton').width($('#menubutton').height()).css('left',(w-$('#menubutton').width())/2);
	var wh=$('#brain').height();
	if(typeof(wh.search)!='undefined'&&wh.search('%')!=-1||wh==50){
    $("#brain").css('width',(wh/100*h)+'px');
    }
    else{
        $("#brain").width($('#brain').height());
    }
    if(w>1300 && h> 600){
        $('#brain').height(500);
        $('#brain').width(494);
    }
    else{
    	$('#displayBox').width(w*0.5);
        $('#displayBox').height(h*0.4);
    }
	var bt=(h-$('#brain').height())/2;
	var oof=$('#brain').height()*0.15;

	var bl=$('#brain').css('left');
	if(bl=='0px')
	bl='10%';
	if(bl.search('%')!=-1){
		bl=bl.substring(0,bl.length-1);
		bl=(bl*w)/100;
	}
	var bo=$('#brain').css('top');
	if(bo=='0px')
		bo='20%';
	if(bo.search('%')!=-1){
		bo=bo.substring(0,bo.length-1);
		bo=(bo*h)/100;
	}
	var dl=bl+$('#brain').width()*0.60;
	$('#displayBox').css('left',dl+'px');
	var centreoffset=(w-(dl+$('#displayBox').width()-bl))/2;
	$('#brain').css('left',centreoffset+'px');
	if(w<1200)
		$('#displayBox').css('left',centreoffset+$('#brain').width()*0.45+'px');
	else{
		$('#displayBox').css('top',bo+bt/2);
		$('#displayBox').css('left',centreoffset+$('#brain').width()*0.6+'px');

	}*/

	/*//COMMENTING THE BUTTON CLICK LOGIC
	$('#insight,#temprament,#foresight').click(function(e){
		if(e.currentTarget.id=="temprament"){
			return;
			$('#displayBox #title label').html('PARTNER');
			$('#displayBox p').hide();
			$('#displayBox p').html('<div id="partner" class="containent"> <div id="p1" class="partc vp"> <img src="images/clogo.png"> <div>Name of Organization1</div> <p>dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner</p> </div> <div id="p2" class="partc"> <img src="images/clogo.png"> <div>Name of Organization2</div> <p>dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner</p> </div> <div id="p3" class="partc"><img src="images/clogo.png"> <div>Name of Organization3</div> <p>dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner</p> </div> <div id="p4" class="partc"> <img src="images/clogo.png"> <div>Name of Organization4</div> <p>dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner dummy text will come here, that talks about the partner</p></div><div id="cont"> <ul><li class="sel" id="l1"></li><li id="l2"></li><li id="l3"></li><li id="l4"></li></ul></div></div>').fadeIn();
		}
		else if(e.currentTarget.id=="foresight"){
			return;
			$('#displayBox #title label').html('JOB OPPORTUNTIES');
			$('#displayBox p').hide();
			$('#displayBox p').html('<div id="jo"><div class="jc" id="job1"><div><label>Position 1: Dummy profile</label><p>job Description: dummy text will come here.</p><span><a href="#">Read More</a></span></div></div><div class="jc" id="job2"><div><label>Position 2: Dummy profile</label><p>job Description: dummy text will come here.</p><span><a href="#">Read More</a></span></div></div></div>').fadeIn();
		}
		else if(e.currentTarget.id=="insight"){
			$('#displayBox #title label').html('CONTACT');
			$('#displayBox p').hide();
			//$('#displayBox p').html('<div id="contdiv"><!--<div id="cl"><div><img src="images/home.png"><label>ADDRESS</label><p><b>BCausE Enterprises Pvt. Ltd</b><br>B-5, Sector 64<br>NOIDA- 201307<br>Contact - (0120) 433750</p></div></div><div id="cr"><div><img src="images/email.png"><label>EMAIL</label><p><!--<b>Future Partners</b><br>apu.saha@bcause.in<br><br><br><b>General Inquery</b><br>apu.saha@bcause.in-->contact@bcause.in</p></div></div></div>').fadeIn();
			$('#displayBox p').html('<div id="contdiv"><p style="padding:1%;"><b>BCausE Enterprises Pvt. Ltd,</b><br>B-5, Sector 64,<br>NOIDA- 201307<br>Contact - (0120) 4333750<br><br>contact@bcause.in</p></div>').fadeIn();
		}
		
		$('.bgPoints').addClass('bPoints').removeClass('bgPoints');
		if(!$(e.currentTarget).hasClass('nerve'))
		$(e.currentTarget).removeClass('bPoints').addClass('bgPoints');	
		$('#displayBox').data('current',e.currentTarget.id);
	});	
		
	$('#displayBox').on('click','#cont li',function(e){
		$('.vp').removeClass('vp').hide();
		$('#p'+e.currentTarget.id.split('l')[1]).fadeIn().addClass('vp');
		$('li.sel').removeClass('sel');
		$(e.currentTarget).addClass('sel');
	})*/
	
	$('#displayBox .mainDisplayContent').slimScroll({
        height: '250px'
    });
	
	var jobList = "<ul>";
		for (var key in jobs){
			jobList += "<li><a href='javascript:;' code='"+jobs[key].code+"'>"+jobs[key].code+" - "+jobs[key].name+"</a></li>";
		}
		jobList += "</ul>";
		$("#jobSection #jobList").html(jobList);
	
	$("#jobSection #jobList li a").click(function(){
		for (var key in jobs){
			if(jobs[key].code==$(this).attr('code')){
				$('#popUp').cosyModal({width : '80%'});
				$("#popUp h1").html(jobs[key].code+" - "+jobs[key].name);
				$("#popUp a").attr('href',"mailto:hr@bcause.in?body=Please find my profile Attached&subject=Job Application | "+jobs[key].code+" | "+jobs[key].name);
				$("#popUp p").html(jobs[key].text);
				$('#popUp').cosyModal('show');
			}
		}
	});
	
	$('.menutxt:not(#menutxt5)').hover(function(){
		$(this).fadeTo('fast','1').css('color',"#093257");
	},function () {
		$('.menutxt:not(#menutxt5)').fadeTo('fast','0.6').css('color',"#999999");
	});
	$('#displayBox').hover(function(){
		$('.menutxt:not(#menutxt5)').fadeTo('fast','0.3');
	},function(){
		$('.menutxt:not(#menutxt5)').fadeTo('fast','0.6');
	});
	$('#nl').click(function(){
		ani(-1);
	});
	$('#nr').click(function(){
		ani(1);
	});
	//$('#insight').trigger('click');
	setTimeout(function(){
		$('#rightHand').animate({'marginRight':'-'+m+'%'},1500);
		$('#leftHand').animate({'marginLeft':'-'+m+'%'},1500,function(){
			$('#displayBox').fadeIn('slow');
		});
		$('.menutxt:not(#menutxt5)').fadeTo('2000','0.6');
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
	$('#foresight').trigger('click');
	}
}
$(window).resize(function() {
  $('body').css('overflow-x','scroll');
  $('body').css('overflow-y','scroll');
});

var jobs = [
//		JOB 1
		{"name": "Principle Consultant :  Mathematical Statistics and  Dataset modeler",
        "code": "PC -MD0115",
        "text": "<p>RESPONSIBILITIES:</p> <ol> <li>Numerical Analysis through mathematical logics</li> <li>Natural Language Processing </li> <li>Theory of Computation & image processing algorithims </li> <li>Game theory and agent based modelling </li> <li>Computational logics to Mathematical models for self actuated data set generation.</li> <li>Knowledge of Concept Algebra, System Algebra, RealTime process Algebra</li> <li>Data Set Modeler to create conceptual data set to physical dataset using tools </li> <li>MATLAB /SAS/STATS or any other tool </li> <li>Python, R and porting in to noSqL database </li> </ol> <p>REQUIREMENTS:</p> <ol> <li>BE/Phd  Computational and statistical  Science and engineering , ISI </li> <li>Certification in Big Data or Machine learning will be an advantage </li> <li>2-4 years of experience </li> <li>Self starter, creative, investigative and inventive </li> </ol>"}
//		JOB 2
		,{"name": "Principal Consultant : Software Developer ",
        "code": "PC -SD0215",
        "text": "<p>RESPONSIBILITIES:</p> <ol> <li>Coding on Perl, Java ,JSON , C, C++  ,Python </li> <li>In depth understanding of XMPP Stack, REST API </li> <li>Backend real time database integration </li> <li>work on various Integrated development environment</li> <li>Wireless communication  protocol understanding</li> <li>Setup, optimise development environment </li> </ol> <p>Desired Skills & Experience<br/>REQUIREMENTS:</p> <ol> <li>BE Computer Sicence from reputed institute</li> <li>Good communication skills </li> <li>Minimum 4-5 years of experience </li> <li>Integration with various modules and components</li> </ol>"}
		];