function addStudent(){
    var lastName = document.getElementById("studentLastName").value;
    var firstName = document.getElementById("studentFirstName").value;
    var grade = document.getElementById("gradeSelect").value;

    if (grade == "null"){
        document.getElementById("currentDeets").innerHTML = "Please select a grade";
        console.log("Please select a grade")
    } else {
        var grade = parseInt(grade);
        allStudents.push(new Student(firstName, lastName, grade));
        document.getElementById("studentLastName").value = "";
        document.getElementById("studentFirstName").value = "";
        document.getElementById("gradeSelect").value = "null";
        console.log(allStudents);
        listStudents();
        listStudent();
    }
}

function addTeacher(){
    var lastName = document.getElementById("teacherLastName").value;
    var firstName = document.getElementById("teacherFirstName").value;
    var subject = document.getElementById("subject").value;

    if (subject == "null"){
        document.getElementById("currentDeets").innerHTML = "Please select a subject";
        console.log("Please select a subject")
    } else {
        allTeachers.push(new Teacher(firstName, lastName, subject));
        document.getElementById("teacherLastName").value = "";
        document.getElementById("teacherFirstName").value = "";
        document.getElementById("subject").value = "null";
        console.log(allTeachers);
        listTeachers();
        listTeacher();
    }
}

function addSection() {
    var teacher = document.getElementById("currentTeachers").value;
    var subject = document.getElementById("sectionSubject").value;
    var maxSize = parseInt(document.getElementById("maxSize").value);
    if (subject == "null") {
        document.getElementById("currentDeets").innerHTML = "Please select a subject";
    } else if (maxSize > 35){
      document.getElementById("currentDeets").innerHTML = "Classes over 35 students are not permitted"
    } else {
        allSections.push(new Section(teacher, maxSize, subject));
        document.getElementById("maxSize").innerHTML = "";
        document.getElementById("sectionSubject").value = "null";
        listSections();
        listSection();
    }
}

function listSections(){
    var t = "<table class='table table-striped' border ='1'><tr><td>Teacher</td><td>Section</td><td>Max Size</td><td>Id</td></tr>";
    for (var i=0; i < allSections.length; i++) {
        t += "<tr><td>" + allSections[i].teacher + "</td>";
        t += "<td>" + allSections[i].subject + "</td>";
        t += "<td>" + allSections[i].maxSize + "</td>";
        t += "<td>" + allSections[i].id + "</td></tr>";
    }
    t += "</table>";
    document.getElementById("currentDeets").innerHTML = t;
}

function listStudents () {
    var t = "<table class='table table-striped' border ='1'><tr><td>First Name</td><td>Last Name</td><td>Grade</td><td>Id</td></tr>";
    for (var i=0; i < allStudents.length; i++) {
    t += "<tr><td>" + allStudents[i].firstName + "</td>";
    t += "<td>" + allStudents[i].lastName + "</td>";
    t += "<td>" + allStudents[i].grade + "</td>";
    t += "<td>" + allStudents[i].id + "</td></tr>";
    }
    t += "</table>";
    document.getElementById("currentDeets").innerHTML = t;
}

function listStudent() {
    var final = "";
    for(var i = 0; i < allStudents.length; i++) {
        final += "<option value='" + allStudents[i].id + "'"+ ">" + allStudents[i].firstName + " " + allStudents[i].lastName  + "</option>"
        document.getElementById("studSelect").innerHTML = final;
    }
    console.log("Yeah it do work")
}


function listStudentsInRemovalSection() {
    var final = "";
    var sectionID = document.getElementById("sectionToRemoveFrom").value;
    console.log(sectionID);
    var section = findSectionObjById(sectionID);
    console.log(section);
    for(var i = 0; i < section.students.length; i++) {
        final += "<option value='" + section.students[i].id + "'"+ ">" + section.students[i].firstName + " " + section.students[i].lastName  + "</option>"

    }
    document.getElementById("studentList").innerHTML = final;
    console.log("Yeah it do work")
}

function removeStudentSection(){
    var sectionID = document.getElementById("sectionToRemoveFrom").value;
    var section = findSectionObjById(sectionID)
    var studentID = document.getElementById("studentList").value;
    var student = findStudentObjById(studentID);
    for(var i = 0; i < section.students.length; i++){
        if(studentID == section.students[i].id) {
            section.students.splice(i,1);
            listStudentsInSection(sectionID);
            listStudentsInRemovalSection();
            return;
        }
    }
}

function listSection(){
    var final = "";
    for(var i = 0; i < allSections.length; i++) {
        final += "<option value='" + allSections[i].id + "'"+ ">" + allSections[i].subject + " " + allSections[i].teacher  + "</option>"
        document.getElementById("secSelect").innerHTML = final;
        document.getElementById("sectionToRemoveFrom").innerHTML = final;
    }
    console.log("Yeah it do work")
}

function listTeacher() {
    var final = "";
    for(var i = 0; i < allTeachers.length; i++) {
        final += "<option value='" + allTeachers[i].lastName + "'"+ ">" + allTeachers[i].lastName  + "</option>"
        document.getElementById("currentTeachers").innerHTML = final;
    }
    console.log("Yeah it do work")
}

function findStudentObjById(studentID){
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id == studentID){
            return allStudents[i];
        }
    }
}

function findSectionObjById(sectionID){
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].id == sectionID){
            return allSections[i];
        }
    }
}

function findTeacherObjById(teacherID){
    for(var i = 0; i < allTeachers.length; i++){
        if(allTeachers[i].id == teacherID){
            return allTeachers[i];
        }
    }
}

function addStudentSection(){
    var student = findStudentObjById(document.getElementById("studSelect").value);
    var section = findSectionObjById(document.getElementById("secSelect").value);
    for(var i = 0; i < section.students.length; i++){
        console.log(section.students[i].firstName);
        console.log(student.firstName);
        if(section.students[i].firstName == student.firstName){
            document.getElementById("currentDeets").innerHTML = "Student already in section"
            return;
        }
    }
    section.addStudentToSection(student);
    listStudentsInSection(document.getElementById("secSelect").value);
    listStudentsInRemovalSection();
    console.log(allSections);
}

function studentSearch(){
    var searchLast = (document.getElementById("searchStudentLast").value).toLowerCase();
    var searchFirst = (document.getElementById("searchStudentFirst").value).toLowerCase();
    for(var i = 0; i < allStudents.length; i++){
        if((allStudents[i].lastName).toLowerCase() == searchLast){
            var lastMatch = true;
        } else {
            lastMatch = false;
        }
        if((allStudents[i].firstName).toLowerCase() == searchFirst){
            var firstMatch = true;
        } else {
            firstMatch = false;
        }
        if(firstMatch == true && lastMatch == true){
            var t = "<table class='table table-striped' border ='1'><tr><td></td></td><td>First Name</td><td>Last Name</td><td>Grade</td><td>Id</td></tr>";
            t += "<tr><td>In sections</td><td>" + allStudents[i].firstName + "</td>";
            t += "<td>" + allStudents[i].lastName + "</td>";
            t += "<td>" + allStudents[i].grade + "</td>";
            t += "<td>" + allStudents[i].id + "</td></tr>";



            var studentClasses = [];
            for(var h = 0; h < allSections.length; h++){
                for(var g = 0; g < allSections[h].students.length; g++){
                    var id = allStudents[i].id;
                    if(allSections[h].students[g].id == id){
                        studentClasses.push(allSections[h].subject + " " + allSections[h].teacher);
                        console.log(studentClasses);
                    }
                }
            }

            for(var x = 0; x < studentClasses.length; x++){
                t += "<tr><td>" + studentClasses[x] + "</td>";

            }
            document.getElementById("currentDeets").innerHTML = t;


            break;
        } else {
            document.getElementById("currentDeets").innerHTML = "Student not found";
        }
    }

}

function listStudentsInSection(sectionID){
    console.log(sectionID);
    var section = findSectionObjById(sectionID);
    var t = "<table class='table table-striped' border ='1'><tr><td>Students in section (" + section.teacher + " " + section.subject + ")</td></tr><tr><td>Name</td><td>Id</td></tr>";
    for(var i = 0; i < section.students.length; i++) {
        t += "<tr><td>" + section.students[i].firstName + " "  + section.students[i].lastName + "</td>";
        t += "<td>" + section.students[i].id + "</td></tr>";
    }
    document.getElementById("currentDeets").innerHTML = t;
}

function listTeachers () {
    var t = "<table class='table table-striped' border ='1'><tr><td>First Name</td><td>Last Name</td><td>Subject</td><td>Id</td></tr>";
    for (var i=0; i < allTeachers.length; i++) {
        t += "<tr><td>" + allTeachers[i].firstName + "</td>";
        t += "<td>" + allTeachers[i].lastName + "</td>";
        t += "<td>" + allTeachers[i].subject + "</td>";
        t += "<td>" + allTeachers[i].id + "</td></tr>";
    }
    t += "</table>";
    document.getElementById("currentDeets").innerHTML = t;

}