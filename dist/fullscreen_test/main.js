function resizeWrap(){
	var window_height = $(window).outerHeight(true);
	var window_height_px = window_height + "px";
	$('#wrap').css('height', window_height_px);

}

function toggleFullscreen(){
	if (screenfull.enabled === true){
		screenfull.toggle();
	};
}

$(document).ready(function(){
	// alert("document loaded");
	resizeWrap();

	$(window).resize(function(){
		console.log("resized");
		resizeWrap();
	});

	$('#fullscreen_button').click(function(){
		toggleFullscreen();
	});

});