const salesman_obj_learning={
    emploier_id: 66,
    firstName: 'Tobias',
    lastName: 'Hansen',
    dependency: 'NodeJs',
};

console.log(salesman_obj_learning.firstName);

// Object consturctor
let salesman2 = new Object();

salesman2.firstName = "Lukas";
salesman2.lastName = "Bursee";
salesman2.dependency="Web";
salesman2.emploier_id="55";

console.log(salesman2.firstName);


function salesman3(id,firstname,lastName,dependency){
    this.emploier_id=id;
    this.firstName=firstname;
    this.lastName=lastName;
    this.dependency=dependency;
}

console.log(salesman3.firstName);