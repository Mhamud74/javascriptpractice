for(let i=1; i<=6;i++)
if(i==2){
	alert("This Is Correct");
}else{
	alert("This Is Wrong");
	}
	
	var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
alert(text);

 var count;
            document.write("Starting Loop" + "<br />");
         
            for(count = 0; count < 10; count++) {
               document.write("Current Count : " + count );
               document.write("<br />");
            }         
            document.write("Loop stopped!");