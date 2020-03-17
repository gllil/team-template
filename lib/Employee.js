class Employee {
    constructor(name, id, email){
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getRole(){
        return "Employee";
    }
    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }
}

module.exports = Employee;