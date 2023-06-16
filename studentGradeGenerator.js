//Student Grade Generator (Toy Problem)
//takes user input for student marks
let studentMarks = prompt('Student Marks');

//function to grade the marks according to the grading system
function Grading(marks) {
  let Grade;
  if ( marks >= 0 && marks <= 100 ) {
    if (marks > 79) {
      Grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      Grade = 'B';
    } else if (marks >= 49 && marks <= 59) {
      Grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      Grade = 'D';
    } else if(marks<40){
      Grade = 'E';
    }
  } else {
    Grade = 'Not Graded';
  }
  return Grade;
}

//outputs the grade to the console
console.log(Grading((studentMarks)));
