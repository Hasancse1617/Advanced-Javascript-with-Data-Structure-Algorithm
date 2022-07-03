let fullName = function(state,country){
    console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country)
}
let person = {
    fullName: function(state,country){
        console.log(this.firstName + " " + this.lastName + " from " + state + ", " + country)
    }
}

let person1 = {
    firstName:"Hasan",
    lastName:"Ali"
}
let person2 = {
    firstName:"Humaira",
    lastName:"Yeasmin"
}
// ******** call Method **********

//This example calls the fullName method, using it on person1
fullName.call(person1, "Pabna","Bangladesh");
person.fullName.call(person1, "Kushtia","Bangladesh");
// This example calls the fullName method, using it on person2
fullName.call(person2, "Pabna","Bangladesh");

// ******** Apply Method **********
// This example calls the fullName method, using it on person1 difference Argument Pass
fullName.apply(person1, ["Pabna","Bangladesh"]);
// This example calls the fullName method, using it on person2 difference Argument Pass
fullName.apply(person2, ["Pabna","Bangladesh"]);
person.fullName.apply(person2, ["Kushtia","Bangladesh"]);
console.log(typeof don)

// ******** bind method ********* /// Invoke kora lage abar
let pname = fullName.bind(person1, "Pabna","Bangladesh");
pname();
let ppname = person.fullName.bind(person2, "Kushtia","Bangladesh");
ppname();
