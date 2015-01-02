var w,h;
var m=15;
var w1;
$(function(){
    var isdone=false;
    w=(window.innerWidth==null)?(document.documentElement.offsetWidth):window.innerWidth,h=(window.innerHeight==null)?(document.documentElement.offsetHeight):window.innerHeight;
    w1=w;
    if(w<900){
        w=1024;
            isdone=true;
        $('body').css('overflow-x','scroll');
        $('html').width(w);
    }
    else{
        $('body').css('overflow-x','hidden');
    }
    if(h<500){

        h=650;
        $('body').css('overflow-y','scroll');
        $('html').height(h);
    }else{
        $('body').css('overflow-y','hidden');
    }
    $('body').width(w);
    $('body').height(h);
    if(w1>850&&w1<1024)
        m=22;
    else if(w1>750&&w1<=850)
        m=25;
    else if(w1>650&&w1<=750){
        m=30;
    }
    else if(w1<=650){
        m=5;
    }
    else if(w1<1200 && w1>1024)
        m=w*0.022;
    else if(w1>=1900)
        m=10;

    var wh=$('#leftHand').height();
    if(typeof(wh.search)!='undefined'&&wh.search('%')!=-1||wh==60){
    $("#rightHand,#leftHand").css('width',(wh*0.785/100*h)+'px');
    }
    else{
        $("#rightHand,#leftHand").width($('#leftHand').height()*0.785);
    }
    
    if(w>1100 && h> 500){
        $('#leftHand,#rightHand').height(450);
        $('#leftHand,#rightHand').width(353);
    }
    var ph = $('#leftHand').height();
    if(ph==60){
        ph=60/100*h;
        console.log('fe')
    }
    var pxh =$('.menub').css('height');
    if(typeof(pxh.search)!='undefined'&&pxh.search('%')!=-1)
    $('.menub').width((pxh.substring(0,pxh.length-1)/100)*ph);
    else
    $('.menub').width(pxh);

    $('.menutxt').click(function(e){
        $('#menu'+e.currentTarget.id.split('menutxt')[1]).trigger('click');
    })
    $('#bcauselogo').click(function(){
        window.location.href='index.html?main';
    });
});
function onMenuClick(obj) {
    console.log(obj.id.split('menu')[1]);
    var c = parseInt(obj.id.split('menu')[1], 10);
    switch (c) {
    case 1:
        window.location.href="wheredowecomefrom.html";
        break;
    case 2:
        window.location.href="whoweare.html";
        break;
    case 3:
        window.location.href="whatwedo.html";
        break;
    case 4:
        window.location.href="inovation.html";
        break;
    case 5:
        window.location.href="connect.html";
        break;
    case 6:
        window.open("thoughts.html", '_blank').focus();
        break;
    default:
        console.log("Invalid Click");
    }
}