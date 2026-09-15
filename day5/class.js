// class Hello {

    
//     constructor() {
//         this.faculty = "Vikas";
//         console.log("Hello constructor");
//     }

   
//     showFaculty() {
//         console.log("Faculty:", this.faculty);
//     }
// }


// let h1 = new Hello();
// let h2 = new Hello();


// console.log(h1.faculty);

// h1.showFaculty();
// h2.showFaculty();
// class Student {


//     constructor(rollNumber, name, year) {
//         this.rollNumber = rollNumber;
//         this.name = name;
//         this.year = year;
//     }

//     showStudent() {
//         console.log("Roll Number:", this.rollNumber);
//         console.log("Name:", this.name);
//         console.log("Year:", this.year);
//         console.log("-------------------");
//     }
// }

// let student1 = new Student(101, "Vikas", 1);
// let student2 = new Student(102, "Rahul", 2);
// let student3 = new Student(103, "Amit", 3);


// student1.showStudent();
// student2.showStudent();
// student3.showStudent();
class Student {
    static college = "ABC College";

    constructor(rollNumber, name, year) {
        this.rollNumber = rollNumber;
        this.name = name;
        this.year = year;
    }

    display() {
        console.log("Roll Number:", this.rollNumber);
        console.log("Name:", this.name);
        console.log("Year:", this.year);
        console.log("College:", Student.college);
        console.log("-------------------");
    }

    static showCollege() {
        console.log("College:", Student.college);
    }
}

let student1 = new Student(101, "Vikas", 1);
let student2 = new Student(102, "Rahul", 2);
let student3 = new Student(103, "Amit", 3);

student1.display();
student2.display();
student3.display();

Student.showCollege();
