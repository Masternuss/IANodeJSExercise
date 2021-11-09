class Salesman{

    constructor(id, firstname,lastname,deparment){
        this.id= id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.department = deparment;
    }

    FirstName(){
        return this.firstname;
    }

    LastName(){
        return this.lastname;
    }

    Id(){
        return this.id;
    }

    Department(){
        return this.department;
    }
    info(){
        return `${this.id} ${this.firstname} ${this.lastname} ${this.department}`;
    }

}

let salesman = new Salesman(66,"Tobias","Hansen","Test");
console.log(salesman.info());
