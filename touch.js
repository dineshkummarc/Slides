var startX;
document.addEventListener("touchstart",function(event){
	event.preventDefault();
	if(event.target.id == "container" && event.touches.length < 2){
		startX = event.touches[0].pageX;
	}
},false);

document.addEventListener("touchmove",function(event){
	event.preventDefault();
	//console.log(event.target);
	if(event.target.id == "container" && event.touches.length < 2){
		//console.log((startX - event.touches[0].pageX))
		if((startX - event.touches[0].pageX) > 100){
			previousSlide();
		} else if((startX - event.touches[0].pageX) < 0){
			nextSlide();
		}
	}
},false);