const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, email, id, school){
        super(name, email, id);

        this.school = school;
    }

    getName() {
        this.name;
    }   

    getEmail() {
        this.email;
    }   

    getId() {
        this.id;
    }   

    getSchool() {
        this.school;
    }
}

module.exports = Intern;