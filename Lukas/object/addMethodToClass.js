class Person {
    constructor(name, vorname) {
        this.name = name;
        this.vorname = vorname;
    }
    

}

const addAnschrift = function(Person, Anschrift) {
    return class extends Person {
        method(Anschrift) {
            return this.Anschrift = Anschrift;
        }
    }
}