class Students{
    constructor(name, rollno, marks, isPresent){
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        this.isPresent = true;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Rollno: ${this.rollno}, marks: ${this.marks}, Attendance:${this.isPresent}`);
    }
    updateMarks(newMarks){
        this.marks=newMarks
    }
    checkResult(){
        if(this.marks > 40){
            console.log(`The student is passed.`);
        }
        else{
            console.log(`This student has failed`);
        }
    }
    markAbsent(newAttendance){
        this.isPresent = newAttendance;
    }
    marksIncrease(extraMarks){
        
        if(this.marks+extraMarks > 100){
            console.log("The marks cannot be greater than 100");
   }
   else{
    this.marks += extraMarks;
    console.log(this.marks);
   }
    }
    marksDecrease(marksDeduct){
        
        if(this.marks-marksDeduct < 0){
            console.log("The marks cannot be less than 0");
        }
        else{
            this.marks -= marksDeduct;
            console.log(this.marks)
        }
    }
}

const student = new Students("Megha", 1, 95);
// student.updateMarks(90);

// student.checkResult();
// student.markAbsent(false);
student.marksIncrease(33);
// student.getDetails();