/**
	hunkScrollTop a jQuery Plugin Created By husain saify (hunk)
	http://hunklessons.blogspot.com
	version 1.0
	20/3/2014
**/
(function($){
	$.fn.hunkScrollTop = function(speed){
		//check speed is defined or not
		if(speed == null){
			speed = 'slow';
		}else{
			if(isNaN(speed)){
				//check speed match 3 speeds
				if((speed != 'slow') || (speed != 'medium') || (speed != 'fast')){
					speed = 'slow';
				}
			}
		}
		//create a scroll div
		var div = '<div id="hunkScrollTop"></div>';
		var css = {
			 'display': 'none',
			 'background': 'url(https://googledrive.com/host/0B7XFDKT_0Oz4UVQzUjNOY3ZwdGM/scrolltop.png) no-repeat 50%',
			 'width': '50px',
			 'height': '50px',
			 'position': 'fixed',
			 'right': '50px',
			 'bottom': '50px',
			 'cursor': 'pointer',
			 'opacity': '1',
			 'z-index':'-9999px',
		}
		$(div).appendTo('body');
		$('#hunkScrollTop').css(css);

		$('#hunkScrollTop').hover(function(){
			$(this).css('opacity', '0.8');
		}).mouseout(function(){
			$(this).css('opacity', '1');
		});

		//when window is scroll
		$(window).scroll(function(){
			if($(this).scrollTop() > 80){
				$('#hunkScrollTop').fadeIn('slow');
			}else{
				$('#hunkScrollTop').fadeOut('slow');
			}
		});

		//when scroll button is clicked
		$('#hunkScrollTop').click(function(){
			$('html, body').animate({scrollTop: 0},speed);
		});
	}
}) (jQuery);