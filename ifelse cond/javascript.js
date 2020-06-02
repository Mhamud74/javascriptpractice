const id=101;
if(id==100){
    console.log("Correct");
}else{
    console.warn("Incorrect");
}

var greeting;
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;

if( 1 > 0)
{
    alert("1 is greater than 0");
}

if( 1 < 0)
{
    alert("1 is less than 0");
}

var year=2015;
if (year == 2015) {
    alert( "That's correct!" );
}
    else{
        alert( "You're so smart!" );
    }
    
    var mySal = 1000;
    var yourSal = 500;
    
    if( mySal < yourSal)
    {
        alert("My Salary is 1000");
    }else{
        alert("My Salary is 500");
    }
    var mySal = 0;
    var yourSal = 1;
    
    if( mySal < yourSal)
    {
        alert("My Salary is 1");
    }else{
        alert("My Salary is 0");
    }