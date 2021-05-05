var students = ["Naysa Moreno", "Savanna Garcia", "David Wagnon", "Dustin Martinez", "Rose Barcus", "Austin Whitley", "Irvin Buendia", "Christine Sanchez", "Hannah Paterka", "Joe Hopkins", "David Culver", "Josh Williams", "Lex Zavala", "Karen Valadez", "Jeffrey Rowe", "Benny Alvarez", "Roger Sandoval", "Juan Garcia", "Carrington Jones", "Luke Curran", "Evan Williams", "Juan Perez", "Matthew Walker", "Alejandro Cabrera", "Jose Chavez", "Jordan Felan", "Alex Santamaria", "Alex Hernandez", "Carlos Munoz"];
var randomNumber;
$("#studentSelector").click(function(){
    randomNumber = Math.floor(Math.random()* students.length);
    $("#student").html(students[randomNumber]);
});

