
// slide on page load
	$(document).ready(function(){
		$('.main-nav').slideDown(1300);
	});


// change style on active nav
	jQuery(document).ready(function($){
		var path = window.location.pathname.split("/").pop();
			if (path == ''){
				path = 'index.html';
			}

			var target = $('nav a[href="' + path + '"]');
			target.addClass('active');
		});

