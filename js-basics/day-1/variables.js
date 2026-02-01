//var,let &const

//var(old->Functional Scope, can be re-declared & updated)

var name = "kiruba";
var name = "Trainer"; //re-declared
console.log(name); //Trainer

//let(ES6->Block Scope, can be updated but cannot be re-declared)
let age=33;
//let age=34; //Uncaught SyntaxError: Identifier 'age' has already been declared
age=34; //updated
console.log(age); //34

//const(ES6->Block Scope, cannot be updated & cannot be re-declared)

const company="Ltimindtree";
//company="LTI"; //Uncaught TypeError: Assignment to constant variable.
//const company="LTI"; //Uncaught SyntaxError: Identifier 'company' has already been declared
console.log(company); //Ltimindtree

//summary
//use const by default,let when reassignment is needed,avoid var