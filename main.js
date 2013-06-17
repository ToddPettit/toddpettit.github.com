window.onload = enableJavascriptFeatures();
			
function enableJavascriptFeatures() {
	$("#Content").fadeIn(800, "swing");

	// Pagination dots
	document.getElementById('HeaderActiveWrapper').style.display = "block";
	
	// Attach event listeners
	document.getElementById('InfoLink').addEventListener("click", function(){updateActiveIndicator(0)});
	document.getElementById('BlogLink').addEventListener("click", function(){updateActiveIndicator(1)});
	document.getElementById('SearchButtonWrapper').addEventListener("click", function(){setSearchFocus()});
	
	// Inject img tags
	updateImgData();
	
	// Adjust for width
	resizeUpdate(null);
}

function updateActiveIndicator(mode) {
	var infoActiveElement = document.getElementById("InfoActive");
	var blogActiveElement = document.getElementById("BlogActive");
	
	if (mode === 0) {
		infoActiveElement.style.display = "block";
		blogActiveElement.style.display = "none";
		$("#Content").fadeOut(0);
		$("#Content").fadeIn(800, "swing");
	} else { // mode === 1
		infoActiveElement.style.display = "none";
		blogActiveElement.style.display = "block";
		$("#Content").fadeOut(0);
		$("#Content").fadeIn(800, "swing");
	}
}

function setSearchFocus() {
	setTimeout(function(){document.getElementById('SearchText').focus();}, 1000);
}

window.onresize = function(event) {
	resizeUpdate(event);
}

function resizeUpdate(event) {
	var browserWidth = $(window).width();
	if(browserWidth >= 960) {
		document.getElementById('SearchButtonWrapper').style.display = "inline-block";
	} else {
		document.getElementById('SearchButtonWrapper').style.display = "none";
		
		if(browserWidth <= 640) {
			$('#HeaderButtonWrapper').addClass('header-button-tight');
			$('#HeaderActiveWrapper').addClass('header-active-tight');
		} else {
			$('#HeaderButtonWrapper').removeClass('header-button-tight');
			$('#HeaderActiveWrapper').removeClass('header-active-tight');
		}
	}
}

$(document).ready(function() {

	/* Cube Style With Animate */
	$('.search-button').click(function() {

		$(this).stop().animate({'width':'300px'}, 500, function() {

			$('.search-container').addClass('switch-show');
			$('.search-box').addClass('show-search-box');

			setTimeout(function(){

				$('.search-container').removeClass('switch-show');
				$('.search-button').removeClass('show-search-button').addClass('hide-search-button');
				$('.search-box').addClass('showed-search-box');

			},480);

		});
	});

	$('.search-box img').click(function() {


		$('.search-button').removeClass('hide-search-button');
		$('.search-box').addClass('hidden-search-box');
		$('.search-container').addClass('switch-hide');

		$('.search-button').addClass('show-search-button').stop().delay(500).animate({'width':'50px'}, 500, function() {

			$('.search-container').removeClass('switch-hide');
			$('.search-button').removeClass('show-search-button');
			$('.search-box').removeClass('show-search-box showed-search-box hidden-search-box');

		});
	});

	if(!Modernizr.input.placeholder){
		$("input").each( function(){
	
				thisPlaceholder = $(this).attr("placeholder");
	
				if(thisPlaceholder!=""){
		
					$(this).val(thisPlaceholder);
		
					$(this).focus(function(){ if($(this).val() == thisPlaceholder) $(this).val(""); });
					$(this).blur(function(){ if($(this).val()=="") $(this).val(thisPlaceholder); });
				}
		});
	}
});	