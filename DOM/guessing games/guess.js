
var lost=0;
var win=0;
for (var i=1; i<=5; i++){
var inpnum = parseInt(prompt("Enter a number from 1 to 5 : "));

var randomnum= Math.floor(Math.random()*5)+1;

if(inpnum==randomnum){
	console.log("You have won");
	win++;
}else{
	
	console.log("You have lost. Random number was " +randomnum);
	lost++;
	}	
	
}

document.write("Total Number of won= "+ win +"<br>");
document.write("Total Number of Lost= "+ lost +"<br>");
