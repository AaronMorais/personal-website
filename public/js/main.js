var loading = false;
$(document).ready(function() {
	if(window.location.hash != "") {
		updateOnHash();
	} else if(window.location.pathname == '/') {
		loadHome(false);
	} else if(window.location.pathname == '/projects') {
		loadProjects(false);
	}

	$("#home").click(function() {
		loadHome(true);
	});
	$("#projects").click(function() {
		loadProjects(true);
	});

	$(window).on('hashchange', function() {
		updateOnHash();
	});
});

function updateOnHash() {
	if(document.location.hash == "#projects") {
		loadProjects(true);
	} else if(document.location.hash == "#home") {
		loadHome(true);
	} 
}

function loadHome(change) {
	updateContainer("home.html");
	if(change) {
		document.location.hash = "home";
	}
}

function loadProjects(change) {
	updateContainer("projects.html");
	if(change) {
		document.location.hash = "projects";
	}
}

function showSocialIcons(visible) {
	if(visible) {
		updateSocialPosition();
		$(".social_icons").animate({opacity:1}, 500);
	} else {
		$(".social_icons").animate({opacity:0}, 500);
	}
} 

function updateContainer(path) {
	if(loading) 
		return;
	loading = true;

	showSocialIcons(false);
	$(".right-container").animate({opacity:0}, 500, function() {
		$.ajax({
			url : path, 
			success: function(data) {
				$(".right-container").showHtml(data, 500, function() {
				  	loading = false;
			  		$(".right-container").animate({opacity:1}, 500);
			  		showSocialIcons(true);
			  		updateBackground();
				});
			}, 
			async: false
		});
	});
}

function updateSocialPosition() {
	var width = $(window).width();
	if (width < 650) {
		var yValue = $(".left-container").height();
		yValue += 20;
		$(".social_icons").css({top:yValue});
	} else {
		$(".social_icons").css({top:"10%"});
	}
}

function updateBackground() {
	var width = $(window).width();
	if (width < 650) {
		$("html").css({height:$("window").height()});
		$(".right-container").css({height:$("window").height()});
		var height = $(".right-container").height();
		height +=200;
		if(height > $("html").height()) {
			console.log(height);
			console.log($("html").height());
			$("html").css({height:height});
		}
	}
}

$(window).resize(function() {
	updateSocialPosition();
});

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
