function ShowMessage() {
    alert("Hello World!");
}

ShowMessage();

function Messages(fName, Lname){
	alert("Hlw " + fName+ " "+ Lname);
	
}
Messages("Manik", "Mhamud")


function SMessage() {

    for(var i = 0; i < arguments.length; i++){
        alert(arguments[i]);
    }
}

SMessage("Manik", "Mhamud"); 