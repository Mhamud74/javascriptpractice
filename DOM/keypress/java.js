var count=0;
document.querySelector("textarea").addEventListener("keypress", function(event){
	count++;
	var text= event.key;
	document.querySelector("h1").innerHTML="You Have Press " +count;
	
});