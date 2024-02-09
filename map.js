const students = [
    {
      name: 'Alice',
      scores: [85, 92, 88]
    },
    {
      name: 'Bob',
      scores: [90, 95, 87]
    },
    {
      name: 'Charlie',
      scores: [82, 90, 92]
    },
    // Add more students similarly
  ];
  
  // Function to calculate the average score of a student
  const calculateAverage = scores => {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
  };
  
  // Using map to calculate average score for each student
  const averageScores = students.map(student => {
    const averageScore = calculateAverage(student.scores);
    return {
      name: student.name,
      averageScore: averageScore
    };
  });
  
  // Using filter to get students with average scores above 90
  const above90Average = averageScores.filter(student => student.averageScore > 90);
  
  console.log(above90Average);
  