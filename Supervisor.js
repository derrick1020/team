const Employee = require("./Employee");

class Supervisor extends Employee {
  constructor(name, id, email, phoneNumber) {
    super(name, id, email);
    this.phoneNumber = phoneNumber;
  }
  getRole() {
    return "Supervisor";
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
}

const e = new Supervisor("Foo", 1, "testme@test.com", 100);

e.getRole();
e.getPhoneNumber();

module.exports = Supervisor;
