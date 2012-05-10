var active = false;

document.addEventListener("keyup",function(e){
	if(e.keyCode == "39"){
		nextSlide();
	}
	if(e.keyCode == "37"){
		previousSlide();
	}
},false);

function nextSlide(){
	var slide = document.querySelector(".current"),
		slides = document.querySelectorAll(".slide"),
		next = parseInt(document.querySelector(".current").getAttribute("slide"),10)+1;

	if(next == slides.length){
		return false;
	} else if(active === false){
		var next_slide = slides[next];
		slide.className = "slide past";
		next_slide.setAttribute("slide",parseInt(next,10));
		next_slide.className = "slide current";
		active = true;
		setEvent(next_slide);		
	}
}
function previousSlide(){
	var slide = document.querySelector(".current"),
		slides = document.querySelectorAll(".slide"),
		past = parseInt(document.querySelector(".current").getAttribute("slide"),10)-1;
	
	if(past < 0){
		return false;
	} else if(active === false){
		var previous_slide = slides[past];
		slide.className = "slide";
		previous_slide.setAttribute("slide",parseInt(past,10));
		previous_slide.className = "slide current";
		active = true;
		setEvent(previous_slide);	
	}
}

function setEvent(slide){
	slide.addEventListener("webkitTransitionEnd",function(){
		active = false;
	},false);
	slide.addEventListener("transitionend",function(){
		active = false;
	},false);
	slide.addEventListener("oTransitionEnd",function(){
		active = false;
	},false);
}