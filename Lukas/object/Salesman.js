class Salesman {
    constructor(sid, name, firstname, department) {
        this.sid = sid;
        this.name = name;
        this.firstname = firstname;
        this.department = department;
    }
    get sid() { return this.sid;}
    set sid(sid) { this.sid = sid;}
    get name() { return this.name;}
    set name(name) { this.name = name;}
    get firstname() { return this.firstname;}
    set firstname(firstname) { this.firstname = firstname;}
    get department() { return this.department;}
    set department(department) { this.department = department;}
}