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
		if((startX - event.touches[0].pageX) > 50){
			previousSlide();
		} else if((startX - event.touches[0].pageX) < -50){
			nextSlide();
		}
	}
},false);