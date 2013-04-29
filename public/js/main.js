var loading = false;
$(document).ready(function() {
	if(window.location.pathname == '/') {
		loadHome(false);
	} else if(window.location.pathname == '/resume') {
		loadResume(false);
	}

	$("#home").click(function() {
		loadHome(true);
	});
	$("#resume").click(function() {
		loadResume(true);
	});

	$(window).on('hashchange', function() {
		if(document.location.hash == "#resume") {
			loadResume(true);
		} else if(document.location.hash == "") {
			loadHome(true);
		}
	});
});

function loadHome(change) {
	updateContainer("message.html");
	if(change) {
		document.location.hash = "";
	}
}

function loadResume(change) {
	updateContainer("resume.html");
	if(change) {
		document.location.hash = "resume";
	}
}

function updateContainer(path) {
	if(loading) 
		return;
	loading = true;

	$(".right-container").animate({opacity:0}, 500, function() {
		$.ajax({
			url : path, 
			success: function(data) {
				$(".right-container").showHtml(data, 500, function() {
				  	loading = false;
			  		$(".right-container").animate({opacity:1}, 500);
				});
			}, 
			async: false
		});
	});
}

(function($)
{
   $.fn.showHtml = function(html, speed, callback)
   {
      return this.each(function()
      {
         var el = $(this);
         var finish = {width: this.style.width, height: this.style.height};
         var cur = {width: el.width()+'px', height: el.height()+'px'};
         el.html(html);
         var next = {width: el.width()+'px', height: el.height()+'px'};
         el .css(cur) 
            .animate(next, speed, function()  
            {
               el.css(finish); 
               if ( $.isFunction(callback) ) callback();
            });
      });
   };
})(jQuery);