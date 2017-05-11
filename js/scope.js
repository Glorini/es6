var a = 10;
var c = 2;
b(); //hoisting
function b(){
    var a = 100;
    var ciccio = "Ciao!";
    console.log(a*c);
}

person = {
    name: "Adriana",
    surname: "Lima",
    greet: function() {

        var self = this;
        console.log("Ciao "+self.name+" "+self.surname);

        var altraFunc = function(){
        this.surname = "Emily Ratacosa";
        return self.surname+"!!!";
        } 
        console.log(altraFunc());

    }
}

person.greet();