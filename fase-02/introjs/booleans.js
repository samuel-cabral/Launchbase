const classA = [
  {
    name: "Mayk",
    grade: 9.8,
  },
  {
    name: "Diego",
    grade: 10,
  },
  {
    name: "Fulano",
    grade: 2,
  },
  {
    name: "Beltrano",
    grade: 10,
  },
];

const classB = [
  {
    name: "Cleiton",
    grade: 10,
  },
  {
    name: "Robson",
    grade: 10,
  },
  {
    name: "Siclano",
    grade: 0,
  },
];

function calculateAverage(students) {
  let sum = 0;

  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade;
  }

  const average = sum / students.length;

  return average;
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average.toFixed(2)}. Congrats!`);
  } else {
    console.log(`${turma} average: ${average.toFixed(2)}. It is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  console.log(`${student.name} is flunked.`);
}

function flunkedStudents(students) {
  for (student of students) {
    markAsFlunked(student);
    if (student.flunked) {
      sendFlunkedMessage(student);
    }
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, "Class A");
sendMessage(average2, "Class B");

flunkedStudents(classA);
flunkedStudents(classB);
