class Student {
    constructor(studentId, studentName, studentSchool){
        this.id = studentId;
        this.name = studentName;
        this.school = studentSchool;
        // school can be given without variable permently added as shown below
        // this.school = "Balti school"
    }
}
const student1 = new Student(10, "Shahroj", "CIU");
const student2 = new Student(40, "Shahzad", "Chittagong Ideal");
console.log(student1, student2);

// To accesss object only 
console.log(student1.name, student2.name);