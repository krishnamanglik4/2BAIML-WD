class Student{
    static totalStudents = 0 ;
    
    constructor(roll , name , marks){
        this.Rollno = roll;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }
    DisplayResult(){
        console.log("Roll NO = " , this.Rollno);
        console.log("Name = " , this.name);
        console.log("Marks = " , this.marks);

        if(this.marks >= 33){
            console.log("Passed\n");            
        }
        else console.log("Fail\n");
        
    }
};

 let s1 =  new Student(21 , "Krishna" , 90);
 let s2 =  new Student(11 , "Harsh" , 30);
 let s3 = new Student(10,"Vikas" ,80)

 s1.DisplayResult();
 s2.DisplayResult();
 s3.DisplayResult();

console.log(Student.totalStudents);


