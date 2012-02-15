var active = false;

window.addEventListener("load",function(){
	slides = document.querySelectorAll("#slides>div");
	slides[0].className = "current"; 
	for (var i = 0; i < slides.length; i++) {
		slides[i].setAttribute("slide",i)
		slides[i].id = "slide" + (i + 1);
	}	
},false);

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
		next = parseInt(document.querySelector(".current").getAttribute("slide"))+1;

	if(next == slides.length){
		return false;
	} else if(active == false){
		var next_slide = slides[next];
		slide.className = "slide past";
		next_slide.setAttribute("slide",parseInt(next));
		next_slide.className = "slide current";
		active = true;
		setEvent(next_slide);		
	}
}
function previousSlide(){
	var slide = document.querySelector(".current"),
		slides = document.querySelectorAll("#slides>div"),
		past = parseInt(document.querySelector(".current").getAttribute("slide"))-1;
	
	if(past < 0){
		return false;
	} else if(active == false){
		var previous_slide = slides[past];
		slide.className = "slide";
		previous_slide.setAttribute("slide",parseInt(past));
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

/* --- Events for Touch Devices --- */

var startX;
document.addEventListener("touchstart",function(event){
	event.preventDefault();
	if(event.touches.length < 2 && !!event.touches[0].target.className.match("current")){
		startX = event.touches[0].pageX;
	}
},false);

document.addEventListener("touchmove",function(event){
	event.preventDefault();
	if(event.touches.length < 2 && !!event.touches[0].target.className.match("current")){
		if((startX - event.touches[0].pageX) > 0){
			previousSlide();
		} else if((startX - event.touches[0].pageX) < 0){
			nextSlide();
		}
	}
},false);