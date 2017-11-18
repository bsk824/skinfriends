$(function(){
	$.fn.gnb = function() {
		var gnbWrap = $(this),
			depth1Menu = gnbWrap.find('a'),
			menuBtn = $('.btnMenu');

		menuBtn.on('click', function(){
			$('body').toggleClass('menuOn');
			gnbWrap.slideToggle(300);
		});
		depth1Menu.on({
			'click' : function(){
				if ($(window).width() < 768) {
					var $this = $(this),
						section = $this.attr('href').split('#')[1],
						top = $('[data-anchor="'+section+'"]').offset().top;
					$('body').removeClass('menuOn');
					gnbWrap.slideUp(300);
					$this.parent().addClass('active').siblings().removeClass('active');
					$('html, body').animate({scrollTop:top-56},300);
				}
			}
		});
		$('.header h1 a').on('click', function(){
			depth1Menu.parent().removeClass('active');
			if ($(window).width() < 768) {
				$('html, body').animate({scrollTop:0},300);
			}
		});
	}
	$('#gnb').gnb();
});
var winW = $(window).width(),
	respChk = "pc";
function fontSize(w) {
	if (w <= 560) {
		var fontSize = w / 5.12;
		$('html').css('font-size', Math.floor(fontSize*100)/100 + '%');
	} else {
		$('html').css('font-size','62.5%');
	}
}
fontSize(winW);
if (winW < 768 && respChk !== "mo") {
	respChk = "mo";
	$(function(){
		$.fn.fullpage.destroy('all');
	});
} else if (winW > 768 && respChk !== "pc") {
	respChk = "pc";
	$('#fullpage').fullpage({
		menu: '#gnb',
		navigation: true,
		responsiveWidth: 780,
		responsiveHeight: 700
	});
}
$(window).resize(function(){
	var winW = $(window).width();
	fontSize(winW);
	if (winW < 768 && respChk !== "mo") {
		respChk = "mo";
		$.fn.fullpage.destroy('all');
	} else if (winW > 768 && respChk !== "pc") {
		respChk = "pc";
		$('#fullpage').fullpage({
            menu: '#gnb',
    		navigation: true,
            responsiveWidth: 780,
            responsiveHeight: 700
        });
	}
});
function getCookie(name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");

		if (x==name) return unescape(y);
	}
}
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
