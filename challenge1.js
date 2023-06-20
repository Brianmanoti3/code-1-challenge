function calculateGrade()
const marks = parseInt(prompt("Enter student marks (between 0 and 100):"));

let grade;
if (marks >100 && marks <0 (marks)) {
            grade = "invalid input"
  
    }else if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  console.log("The student grade is>:"+grade);