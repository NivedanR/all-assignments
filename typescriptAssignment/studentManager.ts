interface Student {
    name: string;
    rollNumber: number;
    course: string;
    phoneNumber?: string;
}

function printStudentDetails(student: Student): void{
    console.log(`${student.name}`);
    console.log(`${student.rollNumber}`);
    console.log(`${student.course}`);
    console.log(`${student.phoneNumber}`);
    
}

const student1: Student = { name: 'Riya', rollNumber: 101, course: 'TypeScript' };

const student2: Student = { name: 'Arjun', rollNumber: 102, course: 'Angular', phoneNumber: '9876543210' };

printStudentDetails(student1);
printStudentDetails(student2);