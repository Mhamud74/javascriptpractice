len= document.querySelectorAll(".bttn").length;
for(var i=0; i<len; i++){
	document.querySelectorAll(".bttn")[i].addEventListener("click", function(){
		
		var text=this.innerHTML;
		document.querySelector("h1").innerHTML=text +" are you clicked"
		});
	
}