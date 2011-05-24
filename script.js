
$(document.body).keyup(function(e){
	if(e.keyCode == "39"){
		var slide = document.querySelector(".current");
		var next = parseInt(document.querySelector(".current").getAttribute("slide"))+1;
		if(next == $(".slide").length){
			/*for (var i=0; i < $(".slide").length; i++) {
				$(".slide")[i].className = "slide";
			}
			next = 0;*/
			return false;
		}
		var next_slide = $(".slide")[next];
		slide.className = "slide past";
		next_slide.setAttribute("slide",parseInt(next));
		next_slide.className = "slide current";
	}
	if(e.keyCode == "37"){
		var slide = document.querySelector(".current");
		var past = parseInt(document.querySelector(".current").getAttribute("slide"))-1;
		if(past == -1){
			/*for (var i=0; i < $(".slide").length; i++) {
				$(".slide")[i].className = "slide past";
			}
			past = $(".slide").length-1;*/
			return false;
		}
		var previous_slide = $(".slide")[past];
		slide.className = "slide";
		previous_slide.setAttribute("slide",parseInt(past));
		previous_slide.className = "slide current";
	}
});
	

