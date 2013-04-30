var loading = false;
$(document).ready(function() {
	if(window.location.hash != "") {
		updateOnHash();
	} else if(window.location.pathname == '/') {
		loadHome(false);
	} else if(window.location.pathname == '/contact') {
		loadContact(false);
	} else if(window.location.pathname == '/projects') {
		loadProjects(false);
	}

	$("#home").click(function() {
		loadHome(true);
	});
	$("#contact").click(function() {
		loadContact(true);
	});
	$("#projects").click(function() {
		loadProjects(true);
	});

	$(window).on('hashchange', function() {
		updateOnHash();
	});
});

function updateOnHash() {
	if(document.location.hash == "#contact") {
		loadContact(true);
	} else if(document.location.hash == "#projects") {
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

function loadContact(change) {
	updateContainer("contact.html");
	if(change) {
		document.location.hash = "contact";
	}
}

function loadProjects(change) {
	updateContainer("projects.html");
	if(change) {
		document.location.hash = "projects";
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