const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){       
        super(name, email, id);

        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        this.officeNumber;
    }
}

module.exports = Manager;