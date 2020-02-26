var Employee = /** @class */ (function () {
    // private firstName: String;
    // private lastName: String;
    // private salary: Number;
    // private gender: String;
    // private email: String;
    // constructor(f: String, l: String, s: Number, g: String, e: String){
    //     this.firstName = f;
    //     this.lastName = l;
    //     this.gender = g;
    //     this.salary = s;
    //     this.email = e;
    // }
    function Employee(firstName, lastName, salary, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.gender = gender;
        this.email = email;
    }
    Employee.prototype.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    return Employee;
}());
var emp = new Employee("mark", "smith", 1000, "male", "m@gmail.com");
emp.getFullName();
