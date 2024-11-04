const dsa = [];
const pl = [];
const networks = [];function startProgram() {
    while (true) {
        const subjectChoice = prompt("Choose a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
        
        if (subjectChoice === 'D') {
            exitProgram();
            break;
        }
        
        let subjectArray;
        let subjectName;
        
        if (subjectChoice === 'A') {
            subjectArray = dsa;
            subjectName = 'DSA';
        } else if (subjectChoice === 'B') {
            subjectArray = pl;
            subjectName = 'PL';
        } else if (subjectChoice === 'C') {
            subjectArray = networks;
            subjectName = 'Networks';
        } else {
            alert("Invalid choice. Please try again.");
            continue;
        }
        
        while (true) {
            const operation = prompt(`Choose an operation for ${subjectName}:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
            
            if (operation === 'A') {
                enrollStudent(subjectArray, subjectName);
            } else if (operation === 'B') {
                unenrollStudent(subjectArray, subjectName);
            } else if (operation === 'C') {
                break;
            } else if (operation === 'D') {
                exitProgram();
                return;
            } else {
                alert("Invalid choice. Please try again.");
            }
        }
    }
}

function enrollStudent(subjectArray, subjectName) {
    const studentName = prompt(`Enter the name of the student to enroll in ${subjectName}:`);
    if (studentName) {
        subjectArray.push(studentName);
        alert(`${studentName} has been enrolled in ${subjectName}.`);
    }
}

function unenrollStudent(subjectArray, subjectName) {
    if (subjectArray.length === 0) {
        alert(`No students are enrolled in ${subjectName}.`);
        return;
    }
    
    const studentList = subjectArray.join(", ");
    alert(`Enrolled students in ${subjectName}: ${studentList}`);
    const studentName = prompt(`Enter the name of the student to unenroll from ${subjectName}:`);
    
    const index = subjectArray.indexOf(studentName);
    if (index !== -1) {
        subjectArray.splice(index, 1);
        alert(`${studentName} has been unenrolled from ${subjectName}.`);
    } else {
        alert(`${studentName} is not enrolled in ${subjectName}.`);
    }
}

function exitProgram() {
    alert("Final Enrollments:\n" +
        `DSA: ${dsa.join(", ")}\n` +
        `PL: ${pl.join(", ")}\n` +
        `Networks: ${networks.join(", ")}`);
}

startProgram();
