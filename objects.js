var allStudents = [];
var allTeachers = [];
var allSections = [];

var studentId = 1;
var teacherId = 1;
var sectionId = 1;

function Student(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = studentId++;
}

function Teacher(firstName, lastName, subject){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = teacherId++;
}

function Section(teacher, maxSize, subject){
    this.teacher = teacher;
    this.maxSize = maxSize;
    this.subject = subject;
    this.id = sectionId++;
    this.students = [];
    this.addStudentToSection = function studentToAdd(student) {

        this.students.push(student);
    }
}
