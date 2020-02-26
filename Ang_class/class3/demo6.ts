export class Employee{

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

    constructor(
        public firstName: String,
        public lastName: String,
        public salary: Number,
        public gender: String,
        public email: String){}
    

    getFullName(){
        console.log(this.firstName + " "+this.lastName)
    }

}

let emp = new Employee("mark","smith", 1000, "male", "m@gmail.com");
emp.getFullName();


