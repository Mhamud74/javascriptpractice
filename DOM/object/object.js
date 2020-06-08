function Student(name, age, cgpa, lang){
	
	this.name= name;
	this.age = age;
	this.cgpa = cgpa;
	this.lang =lang;
	
	
	
	this.display= function(){
		
		console.log(this.name);
		console.log(this.age);
		console.log(this.cgpa);
		console.log(this.lang);
		}
}

var stud1= new Student("JAMAL mia", 50, 3.30, ["Bangla"]);
var stud2= new Student("Kamal mia", 60, 3.40, ["English"]);
var stud3= new Student("Sumon mia", 40, 3.80, ["Bangla"]);
 stud1.display()

