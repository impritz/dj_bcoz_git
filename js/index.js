var to10;
var to2;
var to3;
var to4;
var to5;
var to6;
var to20;
var to21;
var io;
var to30;
var to31;
var to32;
var to40;
var to41;
var trace;

function topage1() {
    $('#map').attr('src', 'images/worldmap.gif');
    switch (trace) {
    case 2000:
        clearTimeout(to20);
        $("#rd,#bt2,#blackboxtop1").fadeOut(500);
        $('#pg2').removeClass('active');
        $(".circlebox,#bt1,#work,.frame,#map").fadeIn(500);
        $("#mapgrey").fadeOut(500);
        $(".cookie,#perceptive").fadeIn(500);
        $('div.circle').removeClass('closed opened');
        page1();
        break;
    case 3000:
        clearTimeout(to30);
        $("#blackboxtop2,#blackbox").fadeOut(500);
        $('#pg3').removeClass('active');
        $('div.circle').removeClass('closed opened');
        $("#bt3,#bcause,.frame").fadeOut(500);
        $(".circlebox,#bt1,#work,.frame").fadeIn(500);
        $("#map").fadeIn(500);
        $("#mapgrey").fadeOut(500);
        $(".cookie,#perceptive").fadeIn(500);
        $('div.circle').removeClass('closed opened');
        page1();
        break;
    case 4000:
        clearTimeout(to40);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        $(".circlebox,#bt1,#work,.frame,#map").fadeIn(500);
        $("#mapgrey").fadeOut(500);
        $(".cookie,#perceptive").fadeIn(500);
        $('div.circle').removeClass('closed opened');
        page1();
        break;

    case 4100:
        clearTimeout(to41);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        $(".circlebox,#bt1,#work,.frame,#map").fadeIn(500);
        $("#mapgrey").fadeOut(500);
        $(".cookie,#perceptive").fadeIn(500);
        $('div.circle').removeClass('closed opened');
        page1();
        break;
    case 4200:
        $('#container,#menubutton,#menubuttonpress,#leftHand,#rightHand,#lab').fadeOut(500);
        $('#pg4').removeClass('active');
        $(".circlebox,#bt1,#work,.frame,#map").fadeIn(500);
        $("#mapgrey").fadeOut(500);
        $(".cookie,#perceptive").fadeIn(500);
        $('div.circle').removeClass('closed opened');
        page1();
        break;
    }
}

function topage2() {
    switch (trace) {
    case 1000:
        clearTimeout(to10);
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#pg1').removeClass('active');
        page2();
        break;
    case 1100:
        $('div.circle').addClass('closed');
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#pg1').removeClass('active');
        page2();
        break;
    case 1200:
        $('div.circle').addClass('closed');
        $('div.circle').find('span').fadeOut(1000);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#pg1').removeClass('active');
        page2();
        break;
    case 1300:
        clearTimeout(to5);
        $('#pg1').removeClass('active');
        page2();
        break;
    case 3000:
        clearTimeout(to30);
        $("#bt3,#bcause,#blackboxtop2,.frame").fadeOut(500);
        $('#pg3').removeClass('active');
        page2();
        break;
    case 4000:
        clearTimeout(to40);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        page2();
        break;
    case 4100:
        clearTimeout(to41);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        $('#mapgrey').fadeIn(500);
        page2();
        break;
    case 4200:
        $('#container,#menubutton,#menubuttonpress,#leftHand,#rightHand,#lab').fadeOut(500);
        $('#pg4').removeClass('active');
        $('#mapgrey').fadeIn(500);
        page2();
        break;
    }
}

function topage3() {
    switch (trace) {
    case 1000:
        clearTimeout(to10);
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame,#mapgrey").fadeOut(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page3();
        break;
    case 1100:
        $('div.circle').addClass('closed');
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame").fadeOut(500);
        $("#mapgrey").fadeIn(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page3();
        break;
    case 1200:
        $('div.circle').addClass('closed');
        $('div.circle').find('span').fadeOut(1000);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work,.frame,#bt1').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#mapgrey").fadeIn(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page3();
        break;
    case 1300:
        clearTimeout(to5);
        $('#map,#perceptive,#work,#bt1,.frame').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#mapgrey").fadeIn(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page3();
        break;
    case 2000:
        clearTimeout(to20);
        $("#rd,#bt2,#blackboxtop1").fadeOut(500);
        $('#pg2').removeClass('active');
        page3();
        break;

    case 4000:
        clearTimeout(to40);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        page3();
        break;
    case 4100:
        clearTimeout(to41);
        $("#lab").fadeOut(500);
        $('#pg4').removeClass('active');
        $('#mapgrey').fadeIn(500);
        page3();
        break;
    case 4200:
        $('#container,#menubutton,#menubuttonpress,#leftHand,#rightHand,#lab').fadeOut(500);
        $('#pg4').removeClass('active');
        $('#mapgrey').fadeIn(500);
        page3();
        break;
    }
}

function topage4() {
    switch (trace) {
    case 1000:
        clearTimeout(to10);
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame").fadeOut(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page4();
        break;
    case 1100:
        $('div.circle').addClass('closed');
        clearTimeout(to2);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame").fadeOut(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page4();
        break;
    case 1200:
        $('div.circle').addClass('closed');
        $('div.circle').find('span').fadeOut(1000);
        clearTimeout(to3);
        clearTimeout(to4);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame").fadeOut(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page4();
        break;
    case 1300:
        clearTimeout(to5);
        $('#map,#perceptive,#work').fadeOut(500);
        $(".circlebox").fadeOut(100);
        $("#bt1,.frame").fadeOut(500);
        $('#pg1').removeClass('active');
        $(".cookie").fadeOut(500);
        page4();
        break;
    case 2000:
        clearTimeout(to20);
        $("#rd,#bt2,#blackboxtop1").fadeOut(500);
        $('#pg2').removeClass('active');
        page4();
        break;

    case 3000:
        clearTimeout(to30);
        $("#bt3,#bcause,#blackboxtop2,.frame").fadeOut(500);
        $('#pg3').removeClass('active');
        page4();
        break;
    }
}


function page4() {
    trace = 4000;
    $('#pg3').removeClass('active');
    $('#pg4').addClass('active');
    $("#bcause,#bt3").fadeOut(1000);
    $("#lab").fadeIn(1000);
    $("#blackboxtop2").fadeOut(1000);
    to40 = setTimeout(function () {
        trace = 4100;
        $('#mapgrey,div.iconcontainer').fadeOut(2000);
        to41 = setTimeout(function () {
            trace = 4200;
            // $('#container,#menubutton,#menubuttonpress,#leftHand,#rightHand').fadeIn(1500);
            $('#container,#leftHand,#rightHand').fadeIn(1500);
        }, 1000)
        setTimeout(function(){
        $('.menub').fadeIn(1000);
        $('.menutxt').fadeIn(1000);
                                },2000);
    }, 500)

}

function page3() {
    trace = 3000;
    $('#pg2').removeClass('active');
    $('#pg3').addClass('active');
    $("#rd,#bt2").fadeOut(1000);
    $("#bt3,#bcause").fadeIn(1000);
    $("#blackboxtop1").fadeOut(1000);
    $("#blackboxtop2,.frame").fadeIn(1000);
    to30 = setTimeout(function () {
        page4();
    }, 7000);
}

function page2() {
    trace = 2000;
    $("#perceptive,#work").fadeOut(1000);
    $("#rd,#bt2").fadeIn(1000);
    $(".circlebox,#bt1").fadeOut(100);
    $(".formula").fadeIn(1000);
    $(".frame,#map").fadeOut(1000,function(){
        $("#mapgrey").fadeIn(1000);
    });
    $(".cookie").fadeOut(1000);
    $('div.iconcontainer').addClass('greymask');
    $('#pg1').removeClass('active');
    $('#pg2').addClass('active');
    to20 = setTimeout(function () {
        page3();
    }, 7500);
}


function page1() {
    trace = 1000;
   
    $('#pg1').addClass('active');
    to10 = setTimeout(function () {
        if (!Modernizr.csstransitions)
            $('div.circle').hide();
           
            $('div.circle').addClass('opened');
      
        if (!Modernizr.csstransitions) {

            $('div.circle').fadeIn(1000, function () {
                this.style.removeAttribute('filter');
            });
            trace = 1100;
        }

    }, 1000);

    trace = 3;
    to2 = setTimeout(function () {

        $('div.circle').find('span').fadeIn(1000);
        trace = 1200;
    }, 2000);


    to3 = setTimeout(function () {

        io = setInterval(function updateNumber() {

            document.getElementById("counter1").innerHTML = parseInt(document.getElementById("counter1").innerHTML) + 1;
            document.getElementById("counter3").innerHTML = parseInt(document.getElementById("counter3").innerHTML) + 1;
            document.getElementById("counter4").innerHTML = parseInt(document.getElementById("counter4").innerHTML) + 1;
            if (document.getElementById("counter5").innerHTML == 60) {
                document.getElementById("counter5").innerHTML = 50;
            } else {
                document.getElementById("counter5").innerHTML = parseInt(document.getElementById("counter5").innerHTML) + 1;
            }
            document.getElementById("counter6").innerHTML = parseInt(document.getElementById("counter6").innerHTML) + 1;
        }, 100)
    }, 2000);
    to4 = setTimeout(function () {
        trace = 1300;
        if (!Modernizr.csstransitions)
            $('div.circle').fadeOut(1000, function () {
                $('div.circle').addClass('closed');
            });
        else
            $('div.circle').addClass('closed');

        to5 = setTimeout(function () {
           page2();

        }, 3000);

    }, 14000);
}
$(document).ready(function ($) {
    $('.menutxt').hover(function(){
        $(this).fadeTo('fast','1').css('color',"#093257");
    },function () {
        $('.menutxt').fadeTo('fast','0.6').css('color','#999999');
    });
    var w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
    $("#loader").css("display", "none");
    $("#content").css("display", "block");
    if(window.location.search == '?main'){
		$('.cookie,#map').hide();
		trace=1000
        topage4();
    }else
    page1();
    
    var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
    if (!Modernizr.canvas || iOS) {
        $('#container').append('<img id="earthpng" src="images/earth.PNG" alt="earth">');
        $('#earthpng').height(h/2);
        $('#earthpng').width($('#earthpng').height());
        var iPhone = (navigator.userAgent.match(/(iPhone)/g) ? true : false);
        $('#earthpng').css('margin-left',-$('#earthpng').height()/2+'px');
        $('#earthpng').css('margin-top',$('#earthpng').height()/2+'px');
        if(iPhone)
            $('#earthpng').css('margin-top',$('#earthpng').height()*1.5+'px');
    }

});

function displayMenus() {
    $('.menub').fadeIn(1000);
    $('.menutxt').fadeIn(1000);
    $("#buttonimage").attr("src", "images/menuButton3.png");
}

function displaySubmenu() {
    
    document.getElementById("menutxt1").style.color = '#ff8b00';
}

function updateOrientation()
{
window.orientation=-90;
console.log(window.orientation);

}