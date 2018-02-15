function personCreate () {
    allStudents.push(new Student("Alex", "Denny", 11));
    allStudents.push(new Student("Jeremy", "Clarkson", 11));
    allStudents.push(new Student("Jeff", "Goldblum", 12));
    allStudents.push(new Student("Mary", "Garfield", 11));
    listStudent();

    allTeachers.push(new Teacher("Markus", "Chloro", "English"));
    allTeachers.push(new Teacher("Pablo", "Kimchi", "English"));
    allTeachers.push(new Teacher("Matt", "Albinson", "Computer"));
    allTeachers.push(new Teacher("Jake", "Farmer", "Math"));
    listTeacher();

    allSections.push(new Section("Chloro", 25, "English"));
    allSections.push(new Section("Kimchi", 30, "English"));
    allSections.push(new Section("Farmer", 28, "Math"));
    allSections.push(new Section("Albinson", 25, "Computer"));
    listSection();
    console.log(allSections);

    return("Data created");
}