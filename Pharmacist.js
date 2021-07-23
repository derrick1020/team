const Employee = require("./Employee");

class Pharmacist extends Employee {
  constructor(name, id, email, license) {
    super(name, id, email);
    this.license = license;
  }
  getRole() {
    return "Pharmacist";
  }
  getGithub() {
    return this.github;
  }
}

const e = new Pharmacist("Foo", 1, "testme@test.com", "GithubUser");

module.exports = Pharmacist;
