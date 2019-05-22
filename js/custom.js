	$('input#optionsRadios1').change(function(){
		if($(this).is(":checked")) {
		    $('img#img1').addClass("selected");
		} else {
		    $('img#img1').removeClass("selected");
		}
	})
	$('input#optionsRadios2').change(function(){
		if($(this).is(":checked")) {
		    $('img#img2').addClass("selected");
		} else {
		    $('img#img2').removeClass("selected");
		}
	})