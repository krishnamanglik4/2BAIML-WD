class Person{ 
    static count = 0;
    constructor(id , name , age){
        this.id = id;
        this.age = age;
        this.name = name ;
        Person.count++;
    }
    Display(){
        console.log("Id" , this.id);
        console.log("Age" , this.age);
        console.log("Name" , this.name);
    }
    static DisplayPerson(){
        console.log("Total Person :" , Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }
      displayDetails() {
        super.displayDetails();
        console.log("Specialization:" , this.specialization );
        console.log("Consultation Fee:" , this.consultationFee);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Disease:" , this.disease);
        console.log("Room No:" , this.roomNo );
    }
}

const doctor1 = new Doctor(1, "Dr. Parth", 45, "Cardiologist", 500);
const doctor2 = new Doctor(2, "Dr. Krish", 38, "Neurologist", 600);

const patient1 = new Patient(101, "John", 30, "Flu", 201);
const patient2 = new Patient(102, "Smith", 25, "Fracture", 202);

console.log("Doctor Details:");
doctor1.displayDetails();
doctor2.displayDetails();

console.log("Patient Details:");
patient1.displayDetails();
patient2.displayDetails();

Person.displayCount();